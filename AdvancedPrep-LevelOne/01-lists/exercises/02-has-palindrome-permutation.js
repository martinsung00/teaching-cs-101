"use strict";

/*
  Implement an algorithm that determines if a given string has a permutation that is a palindrome.

  Input: "tact coa"
  Output: true

  Input: "pizza cat"
  Output: false
*/

export function hasPalindromePermutation(str) {
  /*
  If string is of even length, every character should be paired, storage should be empty
  If string is of odd length there should be only one unique character
  */
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      set.delete(str[i]);
    } else {
      set.add(str[i]);
    }
  }

  return set.size === 1 || set.size === 0 ? true : false;
};
