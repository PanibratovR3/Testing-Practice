import { reverseString } from "./reverseString.js";

test("Basic case", () => {
  expect(reverseString("test")).toBe("tset");
});

test("Case with empty string", () => {
  expect(reverseString("")).toBe("");
});

test("Case with one character", () => {
  expect(reverseString("R")).toBe("R");
});

test("Case with whitespace", () => {
  expect(reverseString("      string")).toBe("gnirts      ");
});
