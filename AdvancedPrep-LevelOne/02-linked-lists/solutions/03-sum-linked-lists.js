"use strict";

/*
  You have two numbers, each represented by a linked list, where each node contains a single digit. The digits are stored in _reverse_ order, such that the 1's place is the last node. Implement an algorithm that adds the two numbers and returns the sum as a linked list.

  Input: 7 -> 1 -> 6 (617) 5 -> 9 -> 2 (295)
  Output: 2 -> 1 -> 9 (912)

  α.

  Follow-up:
  - Suppose the digits were stored in _forward_ order. α.
*/
export function removeDuplicates(l1, l2) {
  let l1Node = l1;
  let l2Node = l2;
  let carry = 0;
  let result = null;

  while (l1 !== null && l2 !== null) {
    const sum =
      carry + (l1Node !== null ? l1Node.data : 0) + (l2Node !== null)
        ? l2Node.data
        : 0;

    carry = sum >= 10 ? 1 : 0;
    sum %= 10;

    const newNode = new Node();
    newNode.data = sum;

    //
  }

  return result;
}
