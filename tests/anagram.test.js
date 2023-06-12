// const { test } = require("node:test");
const isAnagram = require("../01-js/easy/anagram");

test("Checks if 'rasp' and 'spar' are anagrams", () => {
  expect(isAnagram("rasp", "spar")).toBe(true);
})

test("Checks if 'rice' and 'eric' are anagrams", () => {
  expect(isAnagram("rice", "eric")).toBeTruthy();
})

test("Checks if 'monogamous' and 'rhinocerous' are anagrams", () => {
  expect(isAnagram("monogamous", "rhinocerous")).toBeFalsy();
})

test("Checks if 'moron' and 'boron' are anagrams", () => {
  expect(isAnagram("moron", "boron")).toBeFalsy();
})