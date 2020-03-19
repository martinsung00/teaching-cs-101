"use strict";

/*
  Given a string, return true if there are characters repeated, false if there are none.

  Input: "abcccccccd"
  Output: true

  Input: "apple 1231111"
  Output: true

  Input: ",  .!"
  Output: true

  Input: "hi"
  Output: false
*/

function hasRepeatingChars(str) {
  let frequencies = {};

  for (let char of str) {
    if (!frequencies[char]) frequencies[char] = 1;
    else return true;
  }

  return false;
}