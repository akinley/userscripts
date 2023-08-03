// ==UserScript==
// @name        AWS SSO - Auto Allow
// @version     1.0
// @namespace   none
// @grant       none
// @run-at      document-idle
// @match       https://*.awsapps.com/start/user-consent/authorize.html
// ==/UserScript==

document.getElementById("cli_login_button")?.click()
