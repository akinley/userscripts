// ==UserScript==
// @name          AWS SSO — Auto Allow
// @description   Automatically confirm and allow CLI login requests.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.1
// @run-at        document-idle
// @match         https://device.sso.*.amazonaws.com/
// @match         https://*.awsapps.com/start/user-consent/authorize.html
// ==/UserScript==

// 1. Confirm and continue
document.getElementById("cli_verification_btn")?.click()

// 2. Allow
document.getElementById("cli_login_button")?.click()
