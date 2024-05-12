import calculator from "../lib/calculator";

describe("Calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(10, 2)).toBe(8);
  });

  test("divides two numbers (positive result)", () => {
    expect(calculator.divide(12, 3)).toBe(4);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(4, 6)).toBe(24);
  });
});
