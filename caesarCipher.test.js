import { caesarCipher } from "./caesarCipher.js";

test("Basic case.", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Case preservation.", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Punctuation.", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
