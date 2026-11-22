// Q2 - Smart Number Validator

const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function checkInput() {
  const raw = userInput.value.trim();      // remove leading/trailing spaces
  const number = Number(raw);              // Number("") is 0, so empty is checked first

  if (raw === "" || !Number.isFinite(number)) {
    // empty, whitespace-only, text such as "abc", or Infinity/NaN
    result.textContent = "Please enter a valid number!";
  } else if (number < 10) {
    result.textContent = "The number is lower than 10";
  } else if (number > 10) {
    result.textContent = "The number is higher than 10";
  } else {
    result.textContent = "The number is equal to 10";
  }
}

checkBtn.addEventListener("click", checkInput);
