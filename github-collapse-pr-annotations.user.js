// ==UserScript==
// @name          GitHub — Collapse PR Annotations
// @description   Make PR annotations collapsible, and collapsed by default.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.1
// @match         https://github.com/*/pull/*/files
// @match         https://github.com/*
// ==/UserScript==

/* Have to use greedy @match because all navigation within GitHub is AJAX :( */

function addAnnotationToggles() {
  document.querySelectorAll("tr.js-inline-annotations:not(:has(button[aria-label='Show annotations']))").forEach(tr => {
    const td = tr.firstElementChild
    td.classList.remove("border-top")
    td.classList.remove("border-bottom")
    td.style.position = "relative"

    const div = td.firstElementChild
    div.classList.add("border-top")
    div.classList.add("border-bottom")
    div.style.display = "none"

    const button = document.createElement("button")
    button.type = "button"
    button.ariaExpanded = "false"
    button.ariaLabel = "Show annotations"
    button.title = div.lastElementChild.textContent
    button.style.backgroundColor = "transparent"
    button.style.borderWidth = 0
    button.style.cursor = "help"
    button.style.padding = "0 0.5em"
    button.style.position = "absolute"
    button.style.bottom = "50%"
	 button.style.transform = "translateY(-0.25em)"

    const icon = div.querySelector("svg")
    const buttonIcon = icon.cloneNode(true)
    buttonIcon.style.color = getComputedStyle(icon).color
    button.appendChild(buttonIcon)

    td.appendChild(button)

    button.addEventListener("click", (event) => {
      if (button.ariaExpanded === "false") {
        div.style.display = "block"
        button.ariaExpanded = "true"
      } else {
        div.style.display = "none"
        button.ariaExpanded = "false"
      }
    })
  })

  document.querySelectorAll(".js-diff-progressive-container").forEach(el => {
    if (el.textContent.includes("Unchanged files with check annotations")) {
      el.style.display = "none"
    }
  })
}

new MutationObserver(addAnnotationToggles).observe(document.body, { childList: true, subtree: true })
