"use strict";

import LinkedList from "./01-implement-linked-list";

/*
  You have two numbers, each represented by a linked list, where each node contains a single digit. The digits are stored in _reverse_ order, such that the 1's place is the last node. Implement an algorithm that adds the two numbers and returns the sum as a linked list.

  Input: 7 -> 1 -> 6 (617) 5 -> 9 -> 2 (295)
  Output: 2 -> 1 -> 9 (912)

  α.

  Note: a common follow-up is to re-implement the algorithm supposing that the digits were stored in _forward_ order.
*/
export function sum(l1, l2) {
  const head = new Node(0);
  const p1 = l1.head;
  const p2 = l2.head;
  const carry = false;

  while (l1, 12) {
    const l1Val = l1.data ? l1.data = l1.data : 0;
    const l2Val = l2.data ? l2.data = l2.data : 0;
    const sum = carry === true ? l1Val + l2Val + 1 : l1Val + l2Val;

    if (sum > 9) {
      const newSum = sum % 10;

      carry = true;
      head.next = new Node(newSum);
    } else {
      carry = false;
      head.next = new Node (sum);
    }

    p1 ? p1 = p1.next : p1 = null;
    p2 ? p2 = p2.next : p2 = null;
    head = head.next;
  }
};

// re-implement algorithim supposing digits were stored in forward_order
function reverseSum(l1, l2) {
  let head = new Node(0);
  let node = head;
  let carry = 0;
  let start = true;

  while (l1 || l2) {
    let l1Value = l1 ? l1.val : 0;
    let l2Value = l2 ? l2.val : 0;
    let sum = l1Value + l2Value + carry;
    carry = 0;
    let newValue = sum;

    if (sum > 9) {
      newValue = sum % 10;
      carry = 1;
    }
    if (start === false) {
      node.prev = new Node(newValue);
      head.next = node.prev;
      node = node.prev;
    } else {
      node.next = new Node(newValue);
      node = node.next;
      start = false;
    }
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
};
