// ==UserScript==
// @name        PagerDuty - Auto SSO
// @description Click the button to log in with SSO.
// @namespace   none
// @grant       none
// @version     1.0
// @run-at.     document-idle
// @match       https://identity.pagerduty.com/global/authn/authentication/PagerDutyGlobalLogin/subdomain
// ==/UserScript==

document.getElementById("sso_submit")?.click()