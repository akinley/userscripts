// ==UserScript==
// @name          GitHub — Absolute Timestamps
// @description   Replace relative timestamps (e.g. "3 hours ago") with absolute ones.
// @author        Alyssa Kinley
// @license       unlicense
// @namespace     none
// @grant         none
// @version       1.0
// @match         https://github.com/*
// ==/UserScript==

const today = new Date()
const thisYear = today.getFullYear()
const thisMonth = today.getMonth()
const thisDate = today.getDate()

const SAME_DAY_OPTIONS = { hour: "numeric", minute: "2-digit", hour12: true }
const SAME_WEEK_OPTIONS = { ...SAME_DAY_OPTIONS, weekday: "long" }
const SAME_YEAR_OPTIONS = { month: "short", day: "numeric" }
const DIFF_YEAR_OPTIONS = { ...SAME_YEAR_OPTIONS, year: "numeric" }

function removeRelativeTimestamps() {
	document.querySelectorAll("relative-time[datetime]").forEach(el => 	{
		const dateTime = el.getAttribute("datetime")

		const time = document.createElement("TIME")
		time.className = el.className
		time.dateTime = dateTime
		time.title = dateTime

		const date = new Date(dateTime || "INVALID")
		if (Number.isNaN(date.valueOf())) 		{
			console.log("Invalid Date:", el.getAttribute("datetime"), "|", el.getAttribute("title"), "|", el.textContent)
			time.textContent = dateTime || el.textContent
		} else if (date.getFullYear() !== thisYear) {
			time.textContent = date.toLocaleString(undefined, DIFF_YEAR_OPTIONS)
		} else if (date.getMonth() !== thisMonth || date.getDate() !== thisDate) {
			const lastWeek = new Date()
			lastWeek.setDate(lastWeek.getDate() - 6)
			if (date.valueOf() < lastWeek.valueOf()) {
				time.textContent = date.toLocaleString(undefined, SAME_YEAR_OPTIONS)
			} else {
				time.textContent = date.toLocaleString(undefined, SAME_WEEK_OPTIONS)
			}
		}
		else {
			time.textContent = date.toLocaleString(undefined, SAME_DAY_OPTIONS)
		}

		el.replaceWith(time)
	})
}

removeRelativeTimestamps()

new MutationObserver(removeRelativeTimestamps).observe(document.body, { childList: true, subtree: true })
