<!-- Do not modify this readme, it was automatically generated based on the dynamic content in `readme/template.md`. -->

[![Readme](https://github.com/MartinBraquet/no-login/actions/workflows/readme_build.yaml/badge.svg)](https://github.com/MartinBraquet/no-login/actions/workflows/readme_build.yaml)
[![Release](https://github.com/MartinBraquet/no-login/actions/workflows/release.yaml/badge.svg)](https://github.com/MartinBraquet/no-login/actions/workflows/release.yaml)

# No Login

This is a Mozilla Firefox Add-On to access social media websites without logging in, by removing login popups, bypassing other banners, etc.

Currently supported websites:
- LinkedIn
- Instagram
- Facebook


Note that the add-on is in its early phase; please submit a review for any issue or feature request.

#### Demo

![](https://github.com/MartinBraquet/no-login/blob/main/demo/demo.gif?raw=true)

#### Statistics

|        **Users**         |        **Stars**         |         **Reviews**          |
|:------------------------:|:------------------------:|:----------------------------:|
| 4 |  |  |

## Installation

Install the extension

* at https://addons.mozilla.org/addon/no-login,
* or go to `Add-ons` and search for `no login`.

Once installed, the extension will automatically and seamlessly work in the background.

### Locally

Alternatively, you can install the extension from a local folder.
This can be useful for easily testing a not-yet-published version of the extension, without having to set up
a development environment. For example, a pull request might be in progress to address a user issue, and we would like the user
to test the changes (without taking the risk to publish this version on the store).

To do so:

1. Obtain the extension source code locally: clone the relevant repo or download and extract its zip file (e.g., [here](https://github.com/MartinBraquet/no-login/archive/main.zip) for the main branch)

2. Navigate to `about:debugging#/runtime/this-firefox` in the Firefox URL search bar

3. Right next to `Temporary Extensions`, click on `Load Temporary Add-on...`

4. In the selection, click on any file in the root directory of the local extension


## Development

### Prerequisites

* [Mozilla Firefox](https://www.mozilla.org/firefox/new/)
* [Node.js](https://nodejs.org/en/download/): 20.9.0
* [npm](https://www.npmjs.com/get-npm): 10.1.0
* [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/): 7.8.0

Other versions might work, but have not been tested.

### Set up environment

1. Clone the repo

   ```sh
   git clone git@github.com:MartinBraquet/no-login.git
    ```

2. Install the prerequisites

   For Debian-based distributions:

   Install Node.js from these [instructions](https://deb.nodesource.com/).

   ```sh
   sudo apt install npm
   sudo npm install --global web-ext
   sudo npm install mustache jsdom
   ```

3. Run the extension on desktop:
   ```sh
   web-ext run
   ```
   Note: to run on a mobile device connected to your computer, first install the Firefox Nightly app on that mobile. Then set up `adb`:
   ```sh
   sudo apt install android-tools-adb
   adb devices
   ```
    Then, run the extension:
    ```sh
    web-ext run -t firefox-android --adb-device <YOUR_DEVICE_ID> --firefox-apk org.mozilla.fenix
    ```

### Debugging

1. Open the browser console

   ```sh
   Ctrl + Shift + I
   ```
   Or `about:debugging#/runtime/this-firefox` and click on `Inspect` to open the extension console.

### Build

1. Build the extension

   ```sh
   ./build.sh
   ```

2. The extension is now available in the `web-ext-artifacts` folder as a .zip file.

### Release

[Submit](https://addons.mozilla.org) the .zip file to Mozilla for review and publication.

Note: naturally, you won't be able to publish the same extension or overwrite the existing one.
If your extension diverges from the current one, you can change the extension's ID in the `manifest.json` file and publish
it as a new extension in your own account.

## Mozilla Add-ons Store

Go to the [mozilla](mozilla) folder to view and update the texts on the Mozilla Add-ons Store.

## Feedback

### Short Comments
Please write a [review](https://addons.mozilla.org/addon/no-login/reviews/) in the Firefox store.

### Issue / Bug Report / Feature Request
- If you have a GitHub account, open an <a href="https://github.com/MartinBraquet/no-login/issues">issue</a> here.
- Otherwise, write your feedback in this  <a href="https://forms.gle/c87fsmy3tG1MmJaLA">form</a>.

## Contributions

To provide upgrades or fixes, please open a [pull request](https://github.com/MartinBraquet/no-login/pulls).

If you would like to contribute, but you do not know what to do, here are some suggestions:

- [ ] Provide a nice add-on logo [images](images) (the current one is very generic)
- [ ] Add support for additional websites
- [ ] Make the extension compatible with other browsers (e.g., Chrome, etc.)
- [ ] Improve the extension's [popup](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups) (right now it only shows the number of logins skipped). Related files: [popup.js](popup.js), [popup.html](popup.html)

## Disclaimer

This extension is not affiliated with any of the companies hosting the websites mentioned above.

This repo has not been tested on any browser other than Mozilla Firefox.
