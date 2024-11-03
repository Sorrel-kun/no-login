// utils.js is already imported as a content script.
// Debug: ctrl+shift+i, click on the extension's tab.

const closeTranslations = [
    "Close",
    "Cerrar",
    "Fermer",
    "Schließen",
    "Chiudere",
    "Fechar",
    "Закрыть",
    "关闭",
    "閉じる",
    "닫다",
    "إغلاق",
    "बंद करना",
    "Kapatmak",
    "Stänga",
    "Sluiten",
    "Sulkea",
    "Lukke",
    "Lukke",
    "Zavřít",
    "Bezárni",
    "ปิด",
    "Đóng",
    "לסגור",
    "Închide",
    "Затвори",
    "Zatvoriť",
    "Uždaryti",
    "Aizvērt",
    "Закрити"
];

const closeSelector = `"${closeTranslations.join('"],[aria-label="')}"`;

function log(x) {
    console.log('no-login - ' + x);
}

const strToHash = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

window.mobileCheck = function () {
    let check = false;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};

const readLocalStorage = async (key) => {
    return new Promise((resolve, reject) => {
        local.get([key], function (result) {
            let value = result[key];
            if (value === undefined) {
                value = defaultOptions[key];
                local.set({[key]: value});
            }
            resolve(value);
        });
    });
};


let hashes = [];

function logOnce(x) {
    let hash = strToHash(x);
    if (!hashes.includes(hash)) {
        hashes.push(hash);
        log(x);
    }
}

function incrementSkipCounter() {
    browser.runtime.sendMessage({loginsSkipped: true});
}

function getAttributes(element) {
    let array = Array.from(element.attributes).reduce((attrs, attr) => ({...attrs, [attr.name]: attr.value}), {});
    return JSON.stringify(array);
}

function getLinkedinCloseButton() {
    let names = ["public_post_contextual-sign-in-modal_modal_dismiss", "public_profile_contextual-sign-in-modal_modal_dismiss",]
    for (let name of names) {
        let button = document.querySelector('[data-tracking-control-name="' + name + '"]');
        if (button) {
            return button;
        }
    }
}

function removeLinkedinLogin() {
    if (!window.location.href.includes('linkedin.com')) {
        return;
    }
    let close_button = getLinkedinCloseButton();
    if (close_button) {
        let main_content = document.getElementById('main-content');
        let aria_hidden = main_content.getAttribute('aria-hidden');
        if (aria_hidden === 'true') {
            close_button.click();
            log("Removed linkedin login banner: " + getAttributes(close_button));
            incrementSkipCounter();
            return;
        }
    }

    let catalog_sign_in = document.querySelector('[aria-labelledby="base-contextual-sign-in-modal-modal-header"]');
    if (catalog_sign_in) {
        let element = closestTo(catalog_sign_in, document.body);
        log("Removed linkedin login banner: " + getAttributes(element));
        element.remove();
        document.body.classList.remove('overflow-hidden');
        incrementSkipCounter();
    }

    let join_elem = document.querySelector('[class="join-form"]');
    if (!join_elem) {
        return;
    }
    let skip_button = document.getElementById('no-login-addon-linkedin-google');
    if (skip_button) {
        return;
    }
    const htmlString = `
      <div id="no-login-addon-popup-banner" class="no-login-addon-popup-banner">
        <div class="popup-content">
          <div class="no-login-addon-popup-header">
            <span class="no-login-addon-close-button" id="no-login-addon-popup-close">&times;</span>
          </div>
          <div class="no-login-addon-popup-body">
            <h2>Message from your no-login add-on</h2>
            <span id="popup-message">To skip login, click below; then click on the first link.</span><br/><br/>
            <a id="no-login-addon-linkedin-google" href="" class="no-login-addon-button">Skip Login</a>
          </div>
        </div>
      </div>
    `;

    const cssString = `
        .no-login-addon-popup-banner {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50vw;
            height: 50vh;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            padding: 20px;
            text-align: center;
            display: none;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 1000; /* Bring the banner to the front */
        }

        .no-login-addon-popup-banner.show {
            display: flex;
        }

        .no-login-addon-popup-banner .popup-content {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .no-login-addon-popup-banner .no-login-addon-popup-header {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ccc;
        }

        .no-login-addon-popup-banner .no-login-addon-popup-header .no-login-addon-close-button {
            cursor: pointer;
            font-size: 18px;
            font-weight: bold;
        }

        .no-login-addon-popup-banner .no-login-addon-popup-body {
            width: 100%;
            height: calc(100%);
            padding: 20px;
            /*display: flex;*/
            justify-content: center;
            align-items: center;
        }


        .no-login-addon-button {
            display: inline-block;
            padding: 10px 20px;
            font-size: 16px;
            color: white;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            text-align: center;
            text-decoration: none;
        }

        .no-login-addon-button:hover {
            background-color: #0056b3;
        }
    `;
    const styleElement = document.createElement('style');
    styleElement.textContent = cssString;
    document.head.appendChild(styleElement);

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const popupBanner = doc.body.firstChild;
    document.body.appendChild(popupBanner);
    const popupClose = document.getElementById('no-login-addon-popup-close');
    skip_button = document.getElementById('no-login-addon-linkedin-google');

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const sessionRedirect = params.get('sessionRedirect');
    if (sessionRedirect == null) {
        return;
    }
    skip_button.href = 'https://www.google.com/search?q=' + sessionRedirect;


    function showPopup() {
        popupBanner.classList.add('show');
    }

    function hidePopup() {
        popupBanner.classList.remove('show');
    }

    popupClose.addEventListener('click', hidePopup);

    showPopup();
    log("Added linkedin login banner for " + sessionRedirect);
}

function closestTo(element, to) {
    let parent = element;
    while (parent.parentNode && parent.parentNode !== to) {
        parent = parent.parentNode;
    }
    return parent;
}

function clickButton(close_button) {
    log("Clicking facebook center dialog close button: " + getAttributes(close_button));
    log(close_button.outerHTML)
    close_button.click();
    incrementSkipCounter();
    return true;
}

function checkAllButtons() {
    let close_buttons = document.querySelectorAll('[role="button"]');
    for (let close_button of close_buttons) {
        let text = close_button.querySelector('[class="native-text"]');
        if (text && text.textContent === '󱤅') {
            return clickButton(close_button);
        }
    }
}

function removeFacebookCenterDialogButton() {
    checkAllButtons();
    let dialog = document.querySelector('[role="dialog"]');
    if (!dialog) return;
    let form = dialog.querySelector('[id="login_popup_cta_form"]');
    if (!form) return;
    // if (!dialog.getAttribute('aria-label')) return;
    let close_buttons = dialog.querySelectorAll('[role="button"]');
    for (let close_button of close_buttons) {
        if (close_button.querySelector('[data-visualcompletion="css-img"]')) {
            return clickButton(close_button);
        }
    }
}

function removeFacebookLogin() {
    if (!window.location.href.includes('facebook.com')) {
        return;
    }

    // Bottom banner
    let banner = document.querySelector('[data-nosnippet=""]');
    if (banner) {
        log("Removed facebook bottom login banner: " + getAttributes(banner));
        banner.remove();
        incrementSkipCounter();
    }

    // Log in center dialog with close button
    let skipped = removeFacebookCenterDialogButton();
    if (skipped) return;

    // Log in center dialog without close button
    let form = document.getElementById('login_popup_cta_form');
    if (form) {
        let element = closestTo(form, document.body);
        log("Removed facebook center login dialog login_popup_cta_form: " + getAttributes(element));
        element.remove();
        incrementSkipCounter();
    }

    form = document.querySelector('[class="m fixed-container bottom"]');
    if (form) {
        log("Removed facebook center login banner m fixed-container bottom: " + getAttributes(form));
        form.remove();
        incrementSkipCounter();
    }
}

function removeInstagramLogin() {
    if (!window.location.href.includes('instagram.com')) {
        return;
    }

    let buttons = document.getElementsByTagName('button');
    for (let button of buttons) {
        let banner = button.querySelector(`[aria-label=${closeSelector}]`);
        if (banner && typeof button.click === 'function') {
            log("Removed instagram login banner: " + getAttributes(button));
            button.click();
            incrementSkipCounter();
        }
    }


    // let dialog = document.querySelector('[role="dialog"]');
    // if (dialog && !dialog.getAttribute('aria-label')) {
        let close_buttons = document.querySelectorAll('[role="button"]');
        for (let close_button of close_buttons) {
            if (close_button && close_button.getElementsByTagName('polyline').length > 0) {
                log("Removed instagram center login banner: " + getAttributes(close_button));
                close_button.click();
                incrementSkipCounter();
                return;
            }
            }
    // }

    // let close_button = dialog.querySelector('[role="button"]');
    // if (!close_button) {
    //     return;
    // }
    // close_button.click();
    // log("Removed instagram login banner");
}

async function checkForLogins() {
    removeLinkedinLogin();
    removeFacebookLogin();
    removeInstagramLogin();
}

setInterval(checkForLogins, 200);
