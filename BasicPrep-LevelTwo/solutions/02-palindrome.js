"use strict";

/*
  Given a string, return true if the string is the same word if it is reversed, including spaces and punctuation.

  Input: "abba"
  Output: true

  Input: "abcdefg"
  Output: false
*/

function isPalindrome(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (i < str.length / 2) {
      stack.push(str[i]);
    } else {
      if (stack.pop() != str[i]) return false;
    }
  }

  return true;
}
