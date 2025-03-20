// ==UserScript==
// @name          PagerDuty SSO — Auto Continue
// @description   Automatically continue to your SSO provider when your login session expires.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.0
// @run-at        document-idle
// @match         https://identity.pagerduty.com/global/authn/authentication/PagerDutyGlobalLogin/subdomain
// ==/UserScript==

document.getElementById("sso_submit")?.click()
