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
  let head = new Node(0);
  let node = head;
  let carry = 0;

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
    node.next = new Node(newValue);
    node = node.next;
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry) {
    node.next = new Node(carry);
  }
  return head.next;
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