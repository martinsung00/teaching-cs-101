"use strict";

/*
  You have two numbers, each represented by a linked list, where each node contains a single digit. The digits are stored in _reverse_ order, such that the 1's place is the last node. Implement an algorithm that adds the two numbers and returns the sum as a linked list.

  Input: 7 -> 1 -> 6 (617) 5 -> 9 -> 2 (295)
  Output: 2 -> 1 -> 9 (912)

  α.

  Follow-up:
  - Suppose the digits were stored in _forward_ order. α.
*/
export function sum(l1, l2) {
  const result = new Node();

  let tail = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    const d1 = l1 ? l1.data : 0;
    const d2 = l2 ? l2.data : 0;

    const d = d1 + d2 + carry;

    tail.next = new Node(d % 10);
    tail = tail.next;

    carry = d >= 10 ? 1 : 0;

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }

  return result.next;
}
