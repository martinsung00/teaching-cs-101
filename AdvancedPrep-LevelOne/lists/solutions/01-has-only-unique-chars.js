"use strict";

/*
  Implement an algorithm to determine if a string has only unique characters, without using any additional data structures.

  Input: "cat"
  Output: true

  Input: "greater good"
  Output: false
*/

/*
  Time: O(n)
  Space: O(n)
*/
export function hasOnlyUniqueCharacters(str) {
  const chars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) return false;
    else chars.add(str[i]);
  }

  return true;
}
