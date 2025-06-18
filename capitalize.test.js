import { capitalize } from "./capitalize.js";

test("Primary test with capitalize", () => {
  expect(capitalize("string")).toEqual("String");
});

test("Working with empty string", () => {
  expect(capitalize("")).toEqual("");
});

test("One letter case", () => {
  expect(capitalize("a")).toEqual("A");
});

test("Whitespace case", () => {
  expect(capitalize("    test")).toEqual("    test");
});

test("Non-character case", () => {
  expect(capitalize("12!*(#*$)@")).toEqual("12!*(#*$)@");
});
