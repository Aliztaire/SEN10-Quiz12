const button = document.getElementById("clickBtn");
const message = document.getElementById("message");
const countEl = document.getElementById("count");
const loadedEl = document.getElementById("loaded");

let count = 0;

button.addEventListener("click", () => {
  count += 1;
  countEl.textContent = String(count);
  message.textContent = "JavaScript is working!";
});

loadedEl.textContent = "Page loaded at " + new Date().toLocaleString();

// Runs once the page has loaded: greets the visitor and shows today's SCM tip.
function showWelcome() {
  const now = new Date();
  document.getElementById("greeting").textContent =
    getTimeGreeting(now.getHours()) + ", visitor!";
  document.getElementById("tip").textContent =
    "SCM tip of the day: " + getDailyTip(now);
}

document.addEventListener("DOMContentLoaded", showWelcome);
