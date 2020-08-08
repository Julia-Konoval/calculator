const title = document.createElement("h1");
title.id = "title";
title.textContent = "Calculator";
document.body.appendChild(title);

const calc = document.createElement("div");
calc.id = "calc";
document.body.appendChild(calc);

const screen = document.createElement("div");
screen.id = "screen";
calc.appendChild(screen);

const buttonContainer = document.createElement("div");
buttonContainer.id = "button-container";
calc.appendChild(buttonContainer);

function createGrid(rows, cols) {
  buttonContainer.style.setProperty("--grid-rows", rows);
  buttonContainer.style.setProperty("--grid-cols", cols);

  for (let i = 0; i < rows * cols; i++) {
    let numberBtn = document.createElement("button");
    buttonContainer.appendChild(numberBtn).className = "number-btn";
  }
}

createGrid(4, 4);
