const isPalindrome = require("../01-js/medium/palindrome");

test("Check if 'Nan' is palindrome", () => {
  expect(isPalindrome("Nan")).toBeTruthy();
})

test("Check if 'Plane' is palindrome", () => {
  expect(isPalindrome("Plane")).toBeFalsy();
})

test("Check if 'mooonooom' is palindrome", () => {
  expect(isPalindrome("mooonooom")).toBeTruthy();
})