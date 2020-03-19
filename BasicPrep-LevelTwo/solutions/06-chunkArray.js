"use strict";

/*
  Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.

  Input: [1, 2, 3, 4], 2
  Output: [[ 1, 2], [3, 4]]

  Input: [1, 2, 3, 4, 5, 6, 7, 8], 3
  Output: [[ 1, 2, 3], [4, 5, 6], [7, 8]]

  Input: [1, 2, 3, 4, 5], 10
  Output: [[ 1, 2, 3, 4, 5]]
*/

function chunkArray(input, chunkSize) {
  let arr = input;
  let result = [];

  while (arr.length >= chunkSize) {
    let elem = [];

    for (let i = 0; i < chunkSize; i++) {
      elem.push(arr.shift());
    }

    result.push(elem);
  }

  result.push(arr);

  return result;
}

console.log("Result: ", chunkArray([1, 2, 3, 4, 5], 10));
