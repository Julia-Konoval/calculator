class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
  }
}
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
const dataOperation = document.querySelector("[data-operation]");

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (
      button.textContent === "." &&
      currentOperandTextElement.textContent.includes(".")
    )
      return;
    currentOperandTextElement.textContent += button.textContent;
  });
});
function calc() {
  operationBtn.forEach((button) => {
    let result;
    // button.addEventListener("click", (e) => {
    switch (button) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "DEL":
        result = a - b;
        break;
      default:
        return;
    }
    console.log(result);
  });
  // });

  operationBtn.addEventListener("click", () => {
    calc();
  });
}
