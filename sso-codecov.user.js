// ==UserScript==
// @name          Codecov — Auto GitHub Login
// @description   Automatically logs in with GitHub when you land on a “not found” page while logged out.
// @author        Alyssa Kinley
// @homepageURL   https://github.com/akinley/userscripts
// @downloadURL   https://raw.githubusercontent.com/akinley/userscripts/main/sso-codecov.user.js
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.0
// @match         https://app.codecov.io/*
// ==/UserScript==

function autoLogin() {
	let loginButton
	// This alt text is terrible, but at least it’s there? ¯\_(ツ)_/¯
	if (document.querySelector("img[alt='illustration error']")) {
		// 1. Click “Login” on a not-found error page
		loginButton = document.querySelector("a[href^='/login?to=']")
	} else {
		// 2. Click “Log in with GitHub” on the login page
		loginButton = document.querySelector("a[data-cy='login-button']:has(img[alt='GitHub logo'])")
	}
	if (loginButton) {
		loginButton.click()
	}
}

autoLogin()
