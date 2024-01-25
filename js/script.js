let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function addOperator(operator) {
  currentInput += operator;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function appendDecimal() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function appendZero() {
  if (currentInput !== "0") {
    currentInput += "0";
    updateDisplay();
  }
}

function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("result").value = currentInput;
}

function evaluateExpression() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    alert("Invalid expression");
  }
}

// Bind keyboard events to the document
function handleKeyInput(key) {
  if (/[0-9]/.test(key)) {
    appendNumber(key);
  } else if (["+", "-", "*", "/"].includes(key)) {
    addOperator(key);
  } else if (key === "Enter") {
    evaluateExpression();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === ".") {
    appendDecimal();
  } else {
    alert("Only numbers and basic operators are allowed");
  }
}
// Bind keyboard events to the document
document.addEventListener("keydown", function (event) {
  event.preventDefault(); // Prevent default behavior

  const key = event.key;
  handleKeyInput(key);
});
