"use strict";

/*
  Implement bubble sort. You can assume the input is a list of numbers, but you must perform this sort in place.
*/

export function bubbleSort(list) {
  let sorted = false;

  while (sorted === false) {
    sorted = true;

    for(let i = 0; i < list.length; i++) {
      let current = list[i];
      let next = list[i + 1];

      if (next > current) {
        sorted = false;
        list[i] = next;
        list[i + 1] = current;
      }
    }
  }
  return list;
};

// Runtime: O(n^2)
// Space: O(1)