"use strict";

/*
  Implement selection sort. You can assume the input is a list of numbers, but you must perform this sort in place.
*/

export function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let smallest = i;
    let temp = list[i];

    for (let j = i; j < list.length; j++) {
      if (list[smallest] > list[j]) {
        smallest = j;
      }
    }
    list[i] = list[smallest];
    list[smallest] = temp;
  }
  return list;
};

//Runtime: O(log(n))
//Space: O(1)