"use strict";

/*
  Given a string, return the character that is most commonly used in the string.

  Input: "abcccccccd"
  Output: "c"

  Input: "apple 1231111"
  Output: "1"
*/

function charFrequency(str) {
  let frequencies = {};
  let mostCommonChar;

  for (let char of str) {
    if (!frequencies[char]) {
      frequencies[char] = 1;

      if (!mostCommonChar) mostCommonChar = char;
    } else {
      frequencies[char] += 1;

      if (frequencies[char] > frequencies[mostCommonChar])
        mostCommonChar = char;
    }
  }

  return mostCommonChar;
}