// Page-load helpers: a time-of-day greeting and an SCM tip of the day.
// Runs in the browser (loaded before script.js) and in Jest (via module.exports).

const SCM_TIPS = [
  "Commit small, commit often.",
  "Write commit messages that explain why, not just what.",
  "Let the pipeline catch mistakes before your users do.",
  "Tag your releases so you can roll back fast.",
  "Keep secrets out of your repository.",
  "Review the diff before you push.",
  "A red build is a gift: fix it before adding more code."
];

function getTimeGreeting(hour) {
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
    throw new RangeError("hour must be an integer from 0 to 23");
  }
  if (hour < 5) {
    return "Up late";
  }
  if (hour < 12) {
    return "Good morning";
  }
  if (hour < 18) {
    return "Good afternoon";
  }
  return "Good evening";
}

function getDailyTip(date) {
  if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
    throw new TypeError("date must be a valid Date");
  }
  return SCM_TIPS[date.getDay()];
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { getTimeGreeting, getDailyTip, SCM_TIPS };
}
