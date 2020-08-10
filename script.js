class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    // clear();
  }

  // clear() {
  //   this.currentOperand() = "";
  //   this.previousOperand() = "";
  //   this.operation = undefined;
  // }
  // delete() {}
  appendNumber(number) {
    this.currentOperand = this.currentOperand.toString() + number.toString;
  }

  chooseOperator(operationBtn) {
    if (operationBtn === "+") {
      function sumAll(...nums) {
        let sum = 0;
        for (num of nums) sum += arg;
        return sum;
      }
    } else if (operationBtn === "-") {
      function subtractAll(...nums) {
        let subtract = 0;
        for (num of nums) subtract -= arg;
        return subtract;
      }
    } else if (operationBtn === "*") {
      function multiplyAll(...nums) {
        let multiply = 0;
        for (num of nums) multiply *= arg;
        return multiply;
      }
    } else if (operationBtn === "/") {
      function divideAll(...nums) {
        let divide = 0;
        for (num of nums) divide /= arg;
        return divide;
      }
    }
  }
}

// updateDisplay() {
//   this.currentOperandTextElement.innerText = this.currentOperand;
// }

const numberBtn = document.querySelectorAll("[data-number]");
const screen = document.querySelector("#screen");
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
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});
operationBtn.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperator(button.innerText);
    calculator.updateDisplay();
  });
});

// operationBtn.forEach((button)=>{
//   button.addEventListener("click", () => {

//   }
