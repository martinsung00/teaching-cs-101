"use strict";

/*
  Implement an algorithm that removes duplicate values in a linked list using only O(1) space.
*/
export function removeDuplicates(head) {
  const current = head;
  const next = head.next;

  if (next === null) return null;

  while (next !== null) {
    while (next.data === current.data) {
      next.next.prev = current;
      next = next.next;
    }
    current = next;
    next = next.next;
  }
};