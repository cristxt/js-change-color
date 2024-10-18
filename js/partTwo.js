const button = document.querySelector(".button");
const colorDisplay = document.querySelector(".color");
let currentColor = "red";
button.addEventListener("click", function() {
    if (currentColor === "red") {
        document.body.style.backgroundColor = "darkblue";
        colorDisplay.textContent = "darkblue";
        currentColor = "darkblue";
    } else {
        document.body.style.backgroundColor = "red";
        colorDisplay.textContent = "red";
        currentColor = "red";
    }
});