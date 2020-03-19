"use strict";

/*
  Given a string, return a new string with the reversed
  order of characters

  Input: "apple"
  Output: "elppa"
*/

// 1. Do not use any function calls.
function reverse(str) {
  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

// 2. Use Array and String methods.
function reverseUsingArrayAndString(str) {
  let result = [];

  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }

  return result.join("");
}

// 3. Use for of.

// 4. Use reduce.

console.log("Result: ", reverseUsingArrayAndString("apple"));
