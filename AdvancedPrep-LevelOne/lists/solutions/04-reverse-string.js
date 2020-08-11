"use strict";

/*
  New keyword: "in place"

  An in-place algorithm, sometimes called a destructive algorithm, modifies the input data structure directly, consuming only O(1) space (constant space). In other words, the amount of space consumed should not scale alongside the input. This does not mean you cannot create new variables, only that (in general) you should be creating variables of constant space. For example, reversing a string can be done with two arrays, by reading the data in one and writing to the other. To do this in-place, you can only create primitive variables, and not use an additional array.
*/

/*
  Implement an algorithm that reverses a string in place. α.

  Input: "algorithm"
  Output: "mhtirogla"
*/

/*
  Time: O(n)
  Space: O(1)
*/
export function reverseString(str) {
  for (let i = 0; i < str.length; i++) {
    const temp = str[i];
    str[i] = str[str.length - 1];
    str[str.length - 1] = temp;
  }

  return str;
}
