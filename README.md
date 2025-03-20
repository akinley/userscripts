# Helpful UserScripts

UserScripts are custom JavaScript that runs on web pages in your browser. You need a browser extension to run them. I use [Violentmonkey](https://violentmonkey.github.io): it’s available [for Chrome and derivatives](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [for Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), and [for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao). Other popular options include TamperMonkey and GreaseMonkey.

Once you have a userscript manager, installed, just click on one of the links to a script below. Files with a `.user.js` extension will automatically be detected as userscripts, and you’ll be prompted to install them. By default, scripts will be auto-updated periodically; you can disable automatic updates and/or manually check for and install updates instead.

You can also write your own scripts, and find many more on [GreasyFork](https://greasyfork.org/) and [OpenUserJS](https://openuserjs.org/). Violentmonkey lets you quickly search for scripts for the current site.

## Scripts to reduce SSO-related tedium

- **[AWS — Always allow CLI login requests](https://raw.githubusercontent.com/akinley/userscripts/main/sso-aws-cli.user.js):** Saves you from having to manually click “Allow” every time your AWS SSO session expires on the command-line. Get up and stretch your legs while it’s meandering through a zillion redirects instead.

- **[GitHub — Auto continue to SSO provider](https://raw.githubusercontent.com/akinley/userscripts/main/sso-github.user.js):** Saves you from having to manually click “Continue” every time your GitHub SSO session expires.

- **[Okta - Auto continue with saved email](https://raw.githubusercontent.com/akinley/userscripts/main/sso-okta.user.js):** Automatically checks “Remember me” and clicks “Next” to log into Okta with a previously remembered email address, so you only have to enter your password and/or touch your Yubikey to log back in. Okta’s “Remember me” checkbox is mostly a lie, as it in no way causes your login session to last any longer or persist between browser launches, but does at least have the minor effect of remembering and pre-filling your email address.

- **[PagerDuty — Auto continue to SSO provider](https://raw.githubusercontent.com/akinley/userscripts/main/sso-pagerduty.user.js):** Saves you from having to manually click “Log in with single sign-on” every time your PagerDuty SSO session expires.

## Scripts for GitHub

- **[Add a Releases tab on projects](https://raw.githubusercontent.com/akinley/userscripts/main/github-releases-tab.user.js):** Saves you from having to go back to the project homepage and scroll down to find the link in the sidebar. This used to exist officially, but GitHub inexplicably removed it several years back. Note that the number of releases is only shown on the tab if you’ve recently visited the project’s homepage.

- **[Always hide whitespace changes on PR diffs](https://raw.githubusercontent.com/akinley/userscripts/main/github-hide-diff-whitespace.user.js):** Saves you from having to manually open the diff view options, check “Hide whitespace”, and click “Apply and reload” every time you view a PR diff. There’s a [years-long request thread on GitHub](https://github.com/orgs/community/discussions/5486) with many people asking to just remember this permanently like the view mode (split vs. unified) but clearly no official fix is forthcoming.

- **[Collapse videos by default in user content](https://raw.githubusercontent.com/akinley/userscripts/main/github-collapse-videos.user.js)**

- **[Fix anchor links in user content](https://raw.githubusercontent.com/akinley/userscripts/main/github-fix-anchor-links.user.js):** Auto-generated permalinks to section headers in user content, like project README files, are broken by default and have been for years.

- **[Never show relative timestamps](https://raw.githubusercontent.com/akinley/userscripts/main/github-absolute-timestamps.user.js):** Replaces relative timestamps like “3 hours ago,” that only make sense if you recently refreshed the page and also know exactly what time it is, with more useful absolute timestamps like “11:30 AM” or “Tuesday 7:15 PM” or “Jan 10, 2020.”

- **[Toggle all PR files in diff view](https://raw.githubusercontent.com/akinley/userscripts/main/github-toggle-all-diffs.user.js):** Adds a button in the Files tab / diff view on a PR to toggle all files _en masse_. When in a mixed state, if more files are expanded than collapsed, all files will be collapsed, and vice versa, ending in a consistent state. Note that the new button _replaces_ the “view in workspace” button since I don’t use that; if there’s interest, I can add a userscript setting so it’s configurable.
