"use strict";

/*
  Input: 500
  Output: 5

  Input: 981
  Output: 189

  Input: -15
  Output: -51
  
  Input: -90
  Output: -9
*/

function reverseInteger(num) {
  let isNegative = false;

  if (num * -1 > 0) {
    isNegative = true;
    num *= -1;
  }

  const result = parseInt(
    num
      .toString()
      .split("")
      .reverse()
      .join("")
  );

  return isNegative ? result * -1 : result;
}
