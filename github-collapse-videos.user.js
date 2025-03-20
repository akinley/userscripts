// ==UserScript==
// @name          GitHub — Collapse Videos
// @description   Collapse videos by default in user content on GitHub.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.1
// @match         https://github.com/*
// ==/UserScript==

function onToggle(event) {
	event.currentTarget.dataset.userToggled = "true"
	event.currentTarget.removeEventListener("toggle", onToggle)
}

function defaultCollapseVideos() {
	document.querySelectorAll("details:not([data-user-toggled]):has(video)").forEach(details => {
		details.dataset.userToggled = "false"
		details.open = false
		details.addEventListener("toggle", onToggle)
		details.querySelector("video").autoplay = false
	})
}

new MutationObserver(defaultCollapseVideos).observe(document.body, { childList: true, subtree: true })
