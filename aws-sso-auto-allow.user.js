// ==UserScript==
// @name        AWS SSO - Auto Allow
// @version     1.1
// @namespace   none
// @grant       none
// @run-at      document-idle
// @match       https://device.sso.*.amazonaws.com/
// @match       https://*.awsapps.com/start/user-consent/authorize.html
// ==/UserScript==

// 1. Confirm and continue
document.getElementById("cli_verification_btn")?.click()

// 2. Allow
document.getElementById("cli_login_button")?.click()
