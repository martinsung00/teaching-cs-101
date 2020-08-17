"use strict";

/*
  Implement an algorithm that determines if a given string is a rotation of another given string.

  Input: "algorithm" "ithmalgor"
  Output: true

  Input: "cat" "tree"
  Output: false
*/

/*
  Time: O(m * n)
  Space: O(n)

  Using native library functions.

  Note: if the search string has no unique characters, then we can check the first letter, which then speeds the algorithm's runtime up to O(n).
*/
export function isRotation1(str1, str2) {
  return str1.concat(str1).includes(str2) ? true : false;
}

/*
  Time: O(m * n)
  Space: O(n)

  Note: if the search string has no unique characters, then we can check the first letter, which then speeds the algorithm's runtime up to O(n).
*/
export function isRotation1(str1, str2) {
  const concatStr = str1.concat(str1);

  for (let i = 0; i < concatStr.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (concatStr[i] !== str2[j]) break;
      if (j === str2.length) return true;
    }
  }
  return false;
}

/*
  Time: O(n)
  Space: O(1)

  Determines cyclic equality of words based on the maximal suffixes algorithm.
  
  A modified Rabin-Karp algorithm acting on a concatenated search string can also be used for similar performance.
*/
export function isRotation2(str1, str2) {
  if (str1.length !== str2.length) return false;

  let i = 0;
  let j = 0;

  while (i < str1.length && j < str1.length) {
    let k = 1;

    while (
      k < str1.length &&
      str1[(i + k) % str1.length] === str2[(j + k) % str1.length]
    ) {
      k += 1;
    }

    if (k > str1.length) return true;
    if (str1[(i + k) % str1.length] > str2[(j + k) % str1.length]) i += k;
    else j += k;
  }

  return false;
}
