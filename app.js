import { doAddOperation, doSubtractOperation, doMultiplyOperation, doDivideOperation } from './functions.js'

const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");

const resultToDisplay = document.getElementById("resultToDisplay");

addButton.addEventListener("click", () => {
  doOperation("add");
});

subtractButton.addEventListener("click", () => {
  doOperation("subtract");
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

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    document.getElementById("errorMessage").innerHTML =
      "Valamelyik input mező üres!";
    resetFields();
  }

  if (num2 === 0) {
    document.getElementById("errorMessage").innerHTML =
      "A nullával való osztásnak nincs értelme!";
    resetFields();
  }

  let operationResult;

  switch (operation) {
    case "add":
      operationResult = doAddOperation(num1, num2);
      break;

    case "subtract":
      operationResult = doSubtractOperation(num1, num2);
      break;

    case "multiply":
      operationResult = doMultiplyOperation(num1, num2);
      break;

    case "divide":
      operationResult = doDivideOperation(num1, num2);
      break;
  }

  resultToDisplay.innerHTML = operationResult;
  resetFields();
}

function resetFields() {
  setTimeout(() => {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("errorMessage").innerHTML = "";
    resultToDisplay.innerHTML = "";
  }, 2000);
}
