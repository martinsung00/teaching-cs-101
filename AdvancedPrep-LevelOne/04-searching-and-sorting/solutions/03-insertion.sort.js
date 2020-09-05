"use strict";

/*
  Implement insertion sort. You can assume the input is a list of numbers, but you must perform this sort in place.
*/

/*
  Time: O(n^2)
  Space: O(1)
*/
export function insertionSort(head) {
  const sentinel = {
    data: -Number.MAX_VALUE,
    next: null,
  };

  while (head) {
    const prev = sentinel;

    while (prev.next && prev.next.val < head.val) {
      prev = prev.next;
    }

    const next = head.next;
    head.next = prev.next;
    prev.next = head;
    head = next;
  }

  return sentinel.next;
}
