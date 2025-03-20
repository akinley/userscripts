# Helpful UserScripts

UserScripts are custom JavaScript that runs on web pages in your browser. You need a browser extension to run them. I use [Violentmonkey](https://violentmonkey.github.io): it’s available [for Chrome and derivatives](https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag), [for Firefox](https://addons.mozilla.org/firefox/addon/violentmonkey/), and [for Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao). Other popular options include TamperMonkey and GreaseMonkey.

Once you have a userscript manager, installed, just click on one of the links to a script below. Files with a `.user.js` extension will automatically be detected as userscripts, and you’ll be prompted to install them. By default, scripts will be auto-updated periodically; you can disable automatic updates and/or manually check for and install updates instead.

You can also write your own scripts, and find many more on [GreasyFork](https://greasyfork.org/) and [OpenUserJS](https://openuserjs.org/). Violentmonkey lets you quickly search for scripts for the current site.

## Note for Chrome users

If you get a warning saying you can’t install extensions or user scripts from this site when clicking on one of the links below, click on the file above to view the code, then click the “Raw” button just above the code. I’ve only seen this happen for the Okta SSO helper script; apparently it’s a “security” feature in Chrome that may or may not help protect some idiots who click everything with blind abandon, at the cost of annoying and frustrating people who actually know what they’re doing... you know, like most so-called security features.

## Global scripts

- **[Right click anywhere](https://raw.githubusercontent.com/akinley/userscripts/main/global-right-click-anywhere.user.js):** Always get the the default context menu while holding Shift. Useful on websites with annoying custom context menus or right-click prevention.

## Scripts to reduce SSO-related tedium

- **[AWS SSO — Auto allow CLI login requests](https://raw.githubusercontent.com/akinley/userscripts/main/sso-aws-cli.user.js):** Saves you from having to manually click “Allow” every time your AWS SSO session expires on the command-line.

- **[GitHub SSO — Auto continue to SSO provider](https://raw.githubusercontent.com/akinley/userscripts/main/sso-github.user.js):** Saves you from having to manually click “Continue” every time your GitHub SSO session expires.

- **[Okta SSO - Auto continue login with saved email](https://raw.githubusercontent.com/akinley/userscripts/main/sso-okta.user.js):** Automatically checks “Remember me” and clicks “Next” to log into Okta with a previously remembered email address, so you only have to enter your password and/or touch your Yubikey to log back in.

- **[PagerDuty SSO — Auto continue to SSO provider](https://raw.githubusercontent.com/akinley/userscripts/main/sso-pagerduty.user.js):** Saves you from having to manually click “Log in with single sign-on” every time your PagerDuty SSO session expires.

## Scripts for GitHub

- **[Absolute timestamps](https://raw.githubusercontent.com/akinley/userscripts/main/github-absolute-timestamps.user.js):** Replaces relative timestamps like “3 hours ago,” that only make sense if you recently refreshed the page and also know exactly what time it is, with more useful absolute timestamps like “11:30 AM” or “Tuesday 7:15 PM” or “Jan 10, 2020.”

- **[Collapse PR annotations](https://raw.githubusercontent.com/akinley/userscripts/main/github-collapse-pr-annotations.user.js):** Makes annotations (i.e. comments from bots) on PR diffs collapsible, and collapses them by default.

- **[Collapse videos in user content](https://raw.githubusercontent.com/akinley/userscripts/main/github-collapse-videos.user.js)** Saves you from having to scroll past them over and over. You can expand them to view if needed.

- **[Fix anchor links in user content](https://raw.githubusercontent.com/akinley/userscripts/main/github-fix-anchor-links.user.js):** Auto-generated permalinks to section headers in user content, like project README files, are broken by default and have been for years.

- **[Hide diff whitespace](https://raw.githubusercontent.com/akinley/userscripts/main/github-hide-diff-whitespace.user.js):** Saves you from having to manually open the diff view options, check “Hide whitespace”, and click “Apply and reload” every time you view a PR diff. There’s a [years-long request thread on GitHub](https://github.com/orgs/community/discussions/5486) with many people asking to just remember this permanently like the view mode (split vs. unified) but clearly no official fix is forthcoming.

- **[Releases tab](https://raw.githubusercontent.com/akinley/userscripts/main/github-releases-tab.user.js):** Adds a top-level “Releases” tab on GitHub projects, so you don’t have to go back to the Code tab and scroll down to find the link in the sidebar. This used to exist officially, but several years ago GitHub, in their infinite Microsoft-induced anti-wisdom, removed it.

- **[Toggle all diffs at once on a PR](https://raw.githubusercontent.com/akinley/userscripts/main/github-toggle-all-diffs.user.js):** Adds a button in the Files tab / diff view on a PR to toggle all files _en masse_. When in a mixed state, if more files are expanded than collapsed, all files will be collapsed, and vice versa, ending in a consistent state. Note that the new button _replaces_ the “view in workspace” button since I don’t use that; if there’s interest, I can add a userscript setting so it’s configurable.
