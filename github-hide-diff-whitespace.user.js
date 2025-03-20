// ==UserScript==
// @name          GitHub - Hide Diff Whitespace
// @description   Automatically toggles on the option to hide whitespace on PR diffs.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.1
// @match         https://github.com/*/pull/*/files
// @match         https://github.com/*
// ==/UserScript==

/* Have to use greedy @match because all navigation within GitHub is AJAX :( */

function hideDiffWhitespace() {
	const url = new URL(window.location)
	if (/.+\/pull\/.+\/files/.test(url.pathname_ && !url.searchParams.has("w")) {
	  url.searchParams.append("w", "1")
	  window.location = url.href
	}
}

new MutationObserver(hideDiffWhitespace).observe(document.body, { childList: true, subtree: true })
