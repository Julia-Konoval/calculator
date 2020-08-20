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

operationBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.textContent);
    switch (e.target.textContent) {
      case "+":
        // add the + to the current operation string
        // so if there is a 5 and you click +, the screen should have 5+
        // same with other operations
        currentOperandTextElement.textContent += e.target.textContent;
        calculate();
        break;
      case "-":
        currentOperandTextElement.textContent += e.target.textContent;
        calculate();
        break;
      case "*":
        currentOperandTextElement.textContent += e.target.textContent;
        calculate();
        break;
      case "DEL":
        currentOperandTextElement.textContent += e.target.textContent;
        calculate();
        break;
      default:
        return;
    }
    currentOperandTextElement.textContent += e.target.textContent;
  });
});
function calculate() {
  console.log("use eval here");
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
  eval(currentOperandTextElement.value);
  currentOperandTextElement.value = result;
  // Use eval by retrieving what is on the calculators screen
  // Use a display function to display the result (it's optional, you can display from this function, but it's better to have seperate display functions)
}
