// Q1 - Interactive Text Changer

// 1. Select the paragraph and the button using DOM selection methods
const message = document.getElementById("message");
const changeBtn = document.getElementById("changeBtn");

// 2. Function that replaces the paragraph text
function changeMessage() {
  message.textContent = "Hello there!";
}

// 3. Attach the function to the button's click event
changeBtn.addEventListener("click", changeMessage);
