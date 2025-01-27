// Debug: ctrl+shift+i, click on the extension's tab.

import {checkForLogins, intervalId} from "./core.js";

if (!window.contentScriptInitialized) {
    window.contentScriptInitialized = true;

    intervalId.value = setInterval(checkForLogins, 200);

    console.log("no-login - Content script loaded: " + intervalId.value);
}

