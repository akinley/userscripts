# Helpful UserScripts

UserScripts are custom JavaScript that runs on web pages in your browser. You need a browser extension to run them. I recommend [Violentmonkey](https://violentmonkey.github.io) it's open-source and actively maintained, and has a straightforward UI.

- Chrome and derivatives: https://chrome.google.com/webstore/detail/violent-monkey/jinjaccalgkegednnccohejagnlnfdag
- Firefox: https://addons.mozilla.org/firefox/addon/violentmonkey/
- Microsoft Edge: https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao

Once you have VM, or another userscript manager, installed, just click on one of the links to a script below. Files with a `.user.js` extension will be detected as a userscript, and you'll be prompted to install it. By default, scripts will be auto-updated periodically; you can disable automatic updates and/or manually check for and install updates instead.

You can also write your own scripts, and find many more on [GreasyFork](https://greasyfork.org/) and [OpenUserJS](https://openuserjs.org/).

### AWS

#### [Automatically allow AWS CLI login requests](https://raw.githubusercontent.com/alyssa-indigo/userscripts/main/aws-sso-auto-allow.user.js)

Saves you from having to manually click "Allow" every time your AWS SSO session expires on the command-line. Get up and stretch your legs while it's meandering through a zillion redirects instead.

### GitHub

#### [Automatically refresh SSO sessions on GitHub](https://raw.githubusercontent.com/alyssa-indigo/userscripts/main/github-sso-auto-continue.user.js)

Saves you from having to manually click "Continue" every time your GitHub SSO session expires.

#### [Always hide whitespace changes on PR diffs](https://raw.githubusercontent.com/alyssa-indigo/userscripts/main/github-hide-diff-whitespace.user.js)

Saves you from having to manually open the diff view options, check "Hide whitespace", and click "Apply and reload" every time you view a PR diff. There's a [long request thread on GitHub](https://github.com/orgs/community/discussions/5486) to just remember this permanently like the view mode (split vs. unified) but it's been nearly 2 years, so clearly no official fix is forthcoming.

### PagerDuty

#### [Automatically refresh SSO sessions on PagerDuty](https://raw.githubusercontent.com/alyssa-indigo/userscripts/main/pagerduty-auto-sso.user.js)

Saves you from having to manually click "Log in with single sign-on" every time your PagerDuty SSO session expires.
