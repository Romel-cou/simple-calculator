// Get all the buttons from the HTML document
var buttons = document.querySelectorAll("button");

// Get the display element from the HTML document
var display = document.querySelector("#display");

// Initialize operands and operator variables
var operand1 = "";
var operand2 = "";
var operator = "";

// Array of operators
var operators = ["+", "-", "*", "/"];

// Add event listeners to all buttons
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(e) {
    var buttonValue = e.target.innerText;
    var lastChar = display.innerText[display.innerText.length - 1];

    // Check if button clicked is a number
    if (!isNaN(buttonValue)) {
      if (operator === "") {
        operand1 += buttonValue;
        display.innerText = operand1;
      } else {
        operand2 += buttonValue;
        display.innerText = operand2;
      }
    }

    // Check if button clicked is a decimal point
    else if (buttonValue === ".") {
      if (operator === "") {
        if (!operand1.includes(".")) {
          operand1 += ".";
          display.innerText = operand1;
        }
      } else {
        if (!operand2.includes(".")) {
          operand2 += ".";
          display.innerText = operand2;
        }
      }
    }

    // Check if button clicked is an operator
    else if (operators.includes(buttonValue)) {
      if (operand1 !== "" && lastChar !== buttonValue && !operators.includes(lastChar)) {
        operator = buttonValue;
        display.innerText += operator;
      }
    }

    // Check if button clicked is the "=" sign
    else if (buttonValue === "=") {
      if (operand1 !== "" && operand2 !== "" && operator !== "") {
        var result = eval(operand1 + operator + operand2);
        display.innerText = result;
        operand1 = result;
        operand2 = "";
        operator = "";
      }
    }

    // Check if button clicked is the "C" button
    else if (buttonValue === "C") {
      operand1 = "";
      operand2 = "";
      operator = "";
      display.innerText = "0";
    }
  });
}
