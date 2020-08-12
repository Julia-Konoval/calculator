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
const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberBtn.forEach((button) => {
  button.addEventListener("click", () => {
    switch (numberBtn) {
      case "1":
        screen.innerText = 1;
        break;
      case "2":
        screen.innerText = 2;
        break;
      case "3":
        screen.innerText = 3;
        break;
      case "4":
        screen.innerText = 4;
        break;
      case "5":
        screen.innerText = 5;
        break;
      case "6":
        screen.innerText = 6;
        break;
      case "7":
        screen.innerText = 7;
        break;
      case "8":
        screen.innerText = 8;
        break;
      case "9":
        screen.innerText = 9;
        break;
      default:
        return;
    }
    this.previousOperandTextElement.innerText = numberBtn.innerText;
  });
});

operationBtn.forEach((button) => {
  let result;
  button.addEventListener("click", () => {
    switch (operator) {
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
    this.currentOperandTextElement.innerText = result;
  });
});
