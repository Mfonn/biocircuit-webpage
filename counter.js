// script.js
let timeSpent = 0;
let clickCount = 0;

// Update time spent every second
setInterval(() => {
    timeSpent++;
    document.getElementById("time").textContent = timeSpent;
}, 1000);

// Track clicks on clickable elements
document.addEventListener("click", (event) => {
    if (event.target.classList.contains("clickable")) {
        clickCount++;
        document.getElementById("clicks").textContent = clickCount;
    }
});
