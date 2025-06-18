import { analyzeArray } from "./analyzeArray.js";

test("Base case.", () => {
  const result = analyzeArray([1, 2, 3, 4]);
  expect(result).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4,
  });
});

test("Case with empty array.", () => {
  const result = analyzeArray([]);
  expect(result.length).toEqual(0);
  expect(result.average).toBeNaN();
  expect(result.min).toBe(Infinity);
  expect(result.max).toBe(-Infinity);
});

test("Case with one item.", () => {
  const result = analyzeArray([0]);
  expect(result).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1,
  });
});

test("Case with negative numbers.", () => {
  const result = analyzeArray([-1, -2, -3, -4, -5]);
  expect(result).toEqual({
    average: -3,
    min: -5,
    max: -1,
    length: 5,
  });
});
