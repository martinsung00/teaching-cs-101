"use strict";

/*
  Implement an algorithm that removes duplicate values in a linked list in O(1) space.
*/

/*
  Time: O(n)
  Space: O(n)

  This can also be done in O(n^2, 1), if space-conscious.
*/
export function removeDuplicates(head) {
  if (head.next === null) return;

  const seen = new Set();

  let p1 = head;
  let p2 = head.next;

  while (p2 !== null) {
    seen.has(p2.data) ? (p1.next = p2.next) : seen.add(p2.data);
  }
}

/*
  If the input is sorted, then we perform this task in O(n, 1).
*/
export function removeDuplicates1(head) {
  if (head.next === null) return;

  let p1 = head;
  let p2 = head.next;

  while (p2 !== null) {
    while (p2.data === p1.data) {
      p2 = p2.next;
    }

    p1.next = p2;
    p2 = p2.next;
  }
}
