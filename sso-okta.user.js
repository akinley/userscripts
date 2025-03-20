// ==UserScript==
// @name          Okta SSO — Auto Continue
// @description   Automatically continue logging in when your email address is already saved.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.0
// @match         https://*.okta.com/*/sso/saml*
// ==/UserScript==

let observer

function autoContinue() {
	const usernameInput = document.querySelector("input[autocomplete='username']")
	if (!usernameInput) {
		return
	}
	if (usernameInput.value.trim().length === 0) {
		if (observer) { observer.disconnect() }
		return
	}

	let continuing = true

	const rememberCheck = document.querySelector("input[type='checkbox'][name='rememberMe']")
	if (!rememberCheck) {
		continuing = false
	}
	else if (!rememberCheck.checked) {
		rememberCheck.click()
	}

	const nextButton = document.querySelector("input[type='submit'][value='Next']")
	if (nextButton) {
		nextButton.click()
	}
	else {
		continuing = false
	}

	return continuing
}

if (!autoContinue()) {
	observer = new MutationObserver(autoContinue)
	observer.observe(document.body, { childList: true, subtree: true })
}
