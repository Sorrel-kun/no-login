Access social media websites without logging in, by removing login popups, bypassing other banners, etc.

Currently supported websites:
- LinkedIn
- Instagram
- Facebook

Works on both desktop and mobile.

<a href="https://github.com/MartinBraquet/no-login/blob/main/demo/demo.gif">Demo video<a/>

How it Works:
A process, running when the current tab is one of the above websites, periodically checks the page content for login elements. When there is one, it behaves in two different ways:
- If there is a button one can click to close it, it clicks it.
- If there is no button, it removes the HTML element containing the popup / banner, revealing the desired content behind.

Please note that the add-on only modifies the HTML webpage content, so it can only reveal and enhance the user interface. That is, it does not apply any trick, if one even reliably exists, to make the website believe that the user is logged in (via dummy accounts, etc.). As a consequence, the add-on is not able to access some of the logged-in features, such as the LinkedIn user's posts past the 3 most recent ones.

Usage:
The add-on should work seamlessly upon installation. 

<a href="https://addons.mozilla.org/addon/no-login/privacy">Privacy and Security</a>

Note that the add-on is in its early phase, so it has room for improvement depending on the user needs; see below for the ways to provide feedback.

Issue / Bug Report / Feature request:
- If you have a GitHub account, open an <a href="https://github.com/MartinBraquet/no-login/issues">issue</a>.
- Otherwise, write your feedback in this  <a href="https://forms.gle/c87fsmy3tG1MmJaLA">form</a>.

Short feedback / comments:
Please write a review here.

Example feature requests:
- Support for additional websites (twitter, quora, reddit, google, etc.)

To report bugs, please include enough information to reproduce it on our devices. For instance, you can provide a step-by-step description of the bug, including the visited URLs, localization and language (aka locale, such as <i>en_US<i/>), etc.