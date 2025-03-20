// ==UserScript==
// @name          GitHub SSO — Auto Continue
// @description   Automatically continue to your SSO provider when your session expires.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.0.1
// @match         https://github.com/*
// ==/UserScript==

let observer

function clickContinue() {
  const button = Array.from(document.querySelectorAll(".org-sso form button[type='submit']"))
    .find(button => button.textContent.trim() === "Continue")
  if (button && !button.disabled) {
    button.click()
    observer.disconnect()
  }
}

observer = new MutationObserver(clickContinue)
observer.observe(document.body, { childList: true, subtree: true })