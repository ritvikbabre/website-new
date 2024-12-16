// JavaScript to animate the dots in "Building in Progress..."
const dotsElement = document.getElementById("dots");
let dotCount = 3;

setInterval(() => {
    // Increment dots until it reaches 6, then reset to 3
    dotCount = dotCount < 6 ? dotCount + 1 : 3;
    dotsElement.textContent = ".".repeat(dotCount);
}, 500); // Adjust the interval time as desired