"use strict";

/*
  Write a function that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.

  Input: "a short sentence"
  Output: "A Short Sentence"

  Input: "look, it is working!"
  Output: "Look, It Is Working!""
*/
function capitalizeString(str) {
  return str
    .split(" ")
    .map(w => w[0].toUpperCase() + w.substring(1))
    .join(" ");
}

console.log("Result: ", capitalizeString("look, it is working!"));
