"use strict";

/*
  Implement an algorithm to determine if a string has only unique characters, without using any additional data structures.

  Input: "cat"
  Output: true

  Input: "greater good"
  Output: false
*/

export function hasOnlyUniqueCharacters(str) {
  /*
  Create a storage to store unique characters.
  If the letter is in the storage already and the letter appears again,
  the string is not composed of only unique characters
  */
  const set = new Set();

  for (let i = 0; i < str.length; i++) {
    if (set.has(str[i])) {
      return false;
    } else {
      set.add(str[i]);
    }
  }

  return true;
};