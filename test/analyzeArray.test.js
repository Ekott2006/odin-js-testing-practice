import analyzeArray from "../lib/analyzeArray";

const result = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

describe("Analyze Array", () => {
  test("analyzeArray with single element", () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("analyzeArray with negative numbers", () => {
    expect(analyzeArray([-2, 1, -5, 3])).toEqual({
      average: -0.75, // Adjust precision as needed
      min: -5,
      max: 3,
      length: 4,
    });
  });

  test("analyzeArray with floating-point numbers", () => {
    expect(analyzeArray([2.5, 1.8, 4.2])).toEqual({
      average: 2.8333333333333335, // Precision error
      min: 1.8,
      max: 4.2,
      length: 3,
    });
  });


  test("Analyze Array test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual(result);
  });
});
