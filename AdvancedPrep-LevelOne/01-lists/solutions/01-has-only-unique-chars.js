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
export function hasOnlyUniqueChars(str) {
  const chars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) return false;
    else chars.add(str[i]);
  }

  return true;
}

/*
  Time: O(n)
  Space: O(1)

  Assuming the input is only composed of lowercase characters a-z, which allows us to use bit vectors and solve the algorithm with constant space. For any input that is an ASCII character, you can represent the 256 bits as 4 longs.
*/
export function hasOnlyUniqueChars1(str) {
  let checker = 0;

  for (let i = 0; i < str.length; i++) {
    let val = str[i] - "a";

    if ((checker & (1 << val)) > 0) {
      return false;
    }

    checker |= 1 << val;
  }

  return true;
}
