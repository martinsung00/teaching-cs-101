"use strict";

/*
  Implement an algorithm that determines if a given string is a rotation of another given string.

  Input: "algorithm" "ithmalgor"
  Output: true

  Input: "cat" "tree"
  Output: false
*/

export function isRotation(str1, str2) {
  /*
  Edge case: In the case that a user provides a number as one of the inputs,
  this will throw an error
  */
  const strOne = str1.toLowerCase();
  const strTwo = str2.toLowerCase();

  if (strOne.length !== strTwo.length) {
    return false;
  }

  for (let i = strOne.length; i >= 0; i--) {
    if (strOne[i] !== strTwo[i]) return false;
  }

  return true
};