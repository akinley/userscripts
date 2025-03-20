// ==UserScript==
// @name          GitHub — Releases Tab
// @description   Brings back the top-level "Releases" tab on GitHub projects.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.1
// @match         https://github.com/*
// ==/UserScript==

const codeTab = document.querySelector("a[data-tab-item='code-tab'], a[data-tab-item='i0code-tab']")
if (!codeTab) { return }

const basePath = location.pathname.split("/").slice(0, 3).join("/")
const cache = JSON.parse(localStorage.getItem("cachedReleaseCount") || "{}")

let releasesCount = cache[basePath]

const releasesLink = document.querySelector("h2 a[href$='/releases']")
if (releasesLink) {
	  const counter = releasesLink.querySelector(".Counter")
  if (counter) {
    releasesCount = Number(counter.textContent.trim())
    cache[basePath] = releasesCount
    localStorage.setItem("cachedReleaseCount", JSON.stringify(cache))
  }
}

const li = document.createElement("li")
li.className = "d-flex"

const a = document.createElement("a")
a.className = "js-selected-navigation-item UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item"
a.dataset.hotkey = "g r"
a.dataset.tabItem = "releases-tab"
a.href = `${basePath}/releases`
li.appendChild(a)

a.innerHTML = `<svg height="16" class="octicon octicon-tag UnderlineNav-octicon d-none d-sm-inline" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
  <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"/>
</svg>`

const span = document.createElement("span")
span.dataset.content = "Releases"
span.appendChild(document.createTextNode("Releases"))
a.appendChild(span)

if (releasesCount && releasesCount > 0) {
  const counter = document.createElement("span")
  counter.className = "Counter"
  counter.title = releasesCount
  counter.appendChild(document.createTextNode(releasesCount))
  a.appendChild(counter)
}

const codeLi = codeTab.closest("li")
codeLi.parentElement.insertBefore(li, codeLi.nextElementSibling)

const currentPath = window.location.pathname.split("/")[3]
if (currentPath === "releases" || currentPath === "tags") {
  a.classList.add("selected")
  a.setAttribute("aria-current", "page")
  codeTab.classList.remove("selected")
  codeTab.removeAttribute("aria-current")
}
