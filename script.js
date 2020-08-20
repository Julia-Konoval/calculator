const numberBtn = document.querySelectorAll("[data-number]");
const operationBtn = document.querySelectorAll("[data-operator]");
const equalsBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
let displayvalue = "";
let firstNumber = Number(numberBtn.textContent);
let currentNumber = "";
let operator = "";

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if ((operator = "-")) {
    return subtract(num1, num2);
  } else if ((operator = "*")) {
    return multiply(num1, num2);
  } else if ((operator = "/")) {
    return divide(num1, num2);
  }
}

function allClear() {
  // Setting all the values to the starting values.
  firstNum = 0;
  currentNum = "";
  operator = "";
}

numberBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      button.textContent === "." &&
      currentOperandTextElement.textContent.includes(".")
    )
      return;
    // if (currentOperandTextElement.textContent.length >= 11) {
    //   deleteItem();
    // }
    currentOperandTextElement.textContent += button.textContent;
    // currentNumber = currentOperandTextElement.textContent;
  });
});

operationBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    currentOperandTextElement.textContent += e.target.textContent;
  });
});

equalsBtn.addEventListener("click", () => {
  let value = currentOperandTextElement.textContent.toString();

  let result = eval(value);
  if (result.length >= 11) {
    Math.round(result);
  }

  // if (currentOperandTextElement.textContent.length >= 10) {
  //   currentOperandTextElement.textContent.style.fontsize = "4vh";
  // }
  currentOperandTextElement.textContent = result;
  //   let operator = operationBtn.textContent;
  //   let value = operate(operator, firstNumber, currentNumber);
  //   currentOperandTextElement.textContent += value;
  //   console.log("1");
  //   calculate(operator, previousOperandTextElement, currentOperandTextElement);
});

function allClear() {
  // Setting all the values to the starting values.
  currentOperandTextElement.textContent = "";
}

function deleteItem() {
  if (currentOperandTextElement.textContent != "") {
    currentOperandTextElement.textContent = currentOperandTextElement.textContent.slice(
      0,
      -1
    );
  }
}

allClearBtn.addEventListener("click", () => {
  allClear();
});

deleteBtn.addEventListener("click", () => {
  deleteItem();
});
