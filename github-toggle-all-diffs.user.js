// ==UserScript==
// @name        GitHub - Toggle All Diffs
// @description Adds a button to expand/collapse all file diffs on a PR.
// @namespace   none
// @grant       none
// @version     1.0
// @match       https://github.com/*/pull/*/files
// ==/UserScript==

const getLabel = (isExpanded) => isExpanded ? "Collapse all" : "Expand all"

const getState = () => {
  const toggles = document.querySelectorAll('button[aria-label="Toggle diff contents"]')
  const collapsed = Array.from(toggles).filter(button => button.getAttribute("aria-expanded") !== "true")
  const expanded = Array.from(toggles).filter(button => button.getAttribute("aria-expanded") === "true")
  const isExpanded = expanded.length >= collapsed.length
  return { isExpanded, collapsed, expanded }
}

const toggleButton = document.createElement("button")
toggleButton.className = "btn btn-sm mr-2"
toggleButton.textContent = getLabel(getState().isExpanded)

const reviewButton = document.querySelector('a[aria-label="Review this pull request in a codespace"]')
if (reviewButton) {
  reviewButton.replaceWith(toggleButton)
} else {
  const fallback = document.getElementById("review-changes-modal")
  if (fallback) {
    fallback.parentElement.insertBefore(toggleButton, fallback)
  }
}

toggleButton.addEventListener("click", () => {
  const { isExpanded, collapsed, expanded } = getState()

  if (isExpanded) {
    expanded.forEach(toggle => toggle.click())
    toggleButton.textContent = getLabel(false)
  } else {
    collapsed.forEach(toggle => toggle.click())
    toggleButton.textContent = getLabel(true)
  }
})