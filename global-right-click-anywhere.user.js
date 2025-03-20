// ==UserScript==
// @name          [*] — Right Click Anywhere
// @description   Always get the the default context menu while holding Shift. Useful on websites with annoying custom context menus or right-click prevention.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.0
// @match         *://*/*
// ==/UserScript==

function letMeRightClick(event) {
	if (event.shiftKey && (event.type === "contextmenu" || event.button === 2)) {
		event.stopPropagation()
		event.stopImmediatePropagation()
	}
}

window.addEventListener("contextmenu", letMeRightClick, true)
window.addEventListener("mousedown", letMeRightClick, true)
window.addEventListener("mouseup", letMeRightClick, true)
