"use strict";

/*
  Implement an algorithm that determines if a given string has a permutation that is a palindrome.

  Input: "tact coa"
  Output: true

  Input: "pizza cat"
  Output: false
*/

/*
  Time: O(n)
  Space: O(n)
*/
export function hasPalindromePermutation(str) {
  const chars = new Set();

  for (let i = 0; i < str.length; i++) {
    if (chars.has(str[i])) chars.delete(chars[i]);
    else chars.add(str[i]);
  }

  return chars.size > 0 ? true : false;
}