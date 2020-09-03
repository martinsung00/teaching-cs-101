"use strict";

/*
  Implement insertion sort. You can assume the input is a list of numbers, but you must perform this sort in place.
*/

export function insertionSort(list) {
  for (let i = 1; i < list.length; i++) {
    for (let j = i; j > 0; j--) {
      if (list[j] < list[j - 1]) {
        const temp = list[j - 1];

        list[j - 1] = list[j];
        list[j] = temp;
      }
    }
  }
  return list;
};
