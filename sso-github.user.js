// ==UserScript==
// @name        GitHub SSO - Auto Continue
// @version     1.0.1
// @namespace   none
// @grant       none
// @run-at      document-idle
// @match       https://github.com/*
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

clickContinue()

observer = new MutationObserver(clickContinue)
observer.observe(document.body, { childList: true, subtree: true })