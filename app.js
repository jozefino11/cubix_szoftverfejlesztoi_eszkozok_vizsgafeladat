const addButton = document.getElementById("add");
const substractButton = document.getElementById("substract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const resultToDisplay = document.getElementById("resultToDisplay");

addButton.addEventListener("click", () => {
  doOperation("add");
});

substractButton.addEventListener("click", () => {
  doOperation("substract");
});

multiplyButton.addEventListener("click", () => {
  doOperation("multiply");
});

divideButton.addEventListener("click", () => {
  doOperation("divide");
});

function doOperation(operation) {
  const num1 = parseInt(document.getElementById("num1").value);
  const num2 = parseInt(document.getElementById("num2").value);
  let operationResult;

  switch (operation) {
    case "add":
      operationResult = num1 + num2;
      break;

    case "substract":
      operationResult = num1 - num2;
      break;

    case "multiply":
      operationResult = num1 * num2;
      break;

    case "divide":
      operationResult = num1 / num2;
      break;
  }

  resultToDisplay.innerHTML = operationResult;
}
