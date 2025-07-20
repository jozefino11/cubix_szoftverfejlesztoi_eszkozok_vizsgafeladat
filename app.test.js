import {
  doAddOperation,
  doSubtractOperation,
  doMultiplyOperation,
  doDivideOperation,
} from "./functions.js";



test("adds two numbers", () => {
  expect(doAddOperation(2, 3)).toBe(5);
});

test("subtracts two numbers", () => {
  expect(doSubtractOperation(5, 8)).toBe(-3);
});

test("multiply two numbers", () => {
  expect(doMultiplyOperation(4, 7)).toBe(28);
});

test("divide two numbers", () => {
  expect(doDivideOperation(42, 7)).toBe(6);
});