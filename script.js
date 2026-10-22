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
