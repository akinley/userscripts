// ==UserScript==
// @name          GitHub - Fix Anchor Links
// @description   Fix in-page / section header links in Markdown content.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.1
// @match         https://github.com/*
// ==/UserScript==

function fixLinksInMarkdown() {
	document.querySelectorAll(".markdown-body :is(h1, h2, h3, h4, h5, h6) a.anchor[aria-hidden]").forEach(a => {
		const text = a.closest("h1, h2, h3, h4, h5, h6").textContent
		a.removeAttribute("tabindex")
		a.removeAttribute("aria-hidden")
		a.setAttribute("aria-label", "Permalink to " + text + " section")
	})
	/*
	document.querySelectorAll("a[href^='#']").forEach(a => {
		const id = a.getAttribute("href").replace(/^#/, "")
		if (!id) {
			return
		}
		const idTarget = document.getElementById(id)
		if (idTarget) {
			return
		}

		const uc = `user-content-${id}`
		const ucTarget = document.getElementById(uc)
		if (ucTarget) {
			ucTarget.id = id
			if (window.location.hash.slice(1) === id) {
				ucTarget.scrollIntoView()
			}
		} else {
			// broken
			a.addEventListener("click", e => e.preventDefault())
			a.style.cursor = "not-allowed"
		}
	})
	*/
}

new MutationObserver(fixLinksInMarkdown).observe(document.body, { childList: true, subtree: true })

const style = document.createElement("style")
style.id = "userjs-github-anchor-links"
document.body.appendChild(style)
style.textContent = `
.markdown-body h1 a.anchor:focus,
.markdown-body h2 a.anchor:focus,
.markdown-body h3 a.anchor:focus,
.markdown-body h4 a.anchor:focus,
.markdown-body h5 a.anchor:focus,
.markdown-body h6 a.anchor:focus {
	outline: 2px solid var(--focus-outlineColor, var(--color-accent-fg));
}
.markdown-body h1 a.anchor:focus .octicon-link,
.markdown-body h2 a.anchor:focus .octicon-link,
.markdown-body h3 a.anchor:focus .octicon-link,
.markdown-body h4 a.anchor:focus .octicon-link,
.markdown-body h5 a.anchor:focus .octicon-link,
.markdown-body h6 a.anchor:focus .octicon-link {
	visibility: visible;
}
`
