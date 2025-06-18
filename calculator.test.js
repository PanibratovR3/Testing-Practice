import { calculator } from "./calculator.js";

test("Adding two numbers.", () => {
  expect(calculator.add(3, 7)).toBe(10);
});

test("Subtracting two numbers.", () => {
  expect(calculator.subtract(5, 6)).toBe(-1);
});

test("Dividing two numbers.", () => {
  expect(calculator.divide(1, 3)).toBeCloseTo(0.33);
});

test("Dividing with zero.", () => {
  expect(calculator.divide(3, 0)).toBe("Error! Division by zero!");
});

test("Multiplication.", () => {
  expect(calculator.multiply(25, 4)).toBe(100);
});
