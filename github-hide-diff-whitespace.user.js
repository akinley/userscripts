// ==UserScript==
// @name        GitHub - Hide Diff Whitespace
// @namespace   none
// @grant       none
// @version     1.0
// @run-at      document-end
// @match       https://github.com/*/pull/*/files
// ==/UserScript==

const url = new URL(window.location)
if (!url.searchParams.has("w")) {
  url.searchParams.append("w", "1")
  window.location = url.href
}
