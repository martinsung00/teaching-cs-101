"use strict";

/*
  Implement selection sort. You can assume the input is a list of numbers, but you must perform this sort in place.
*/

/*
  Time: O(n^2)
  Space: O(1)
*/
export function selectionSort(list) {
  for (let i = 0; i < list.length; i++) {
    const minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[minIndex]) minIndex = j;
    }

    const temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;
  }
  return list;
}
