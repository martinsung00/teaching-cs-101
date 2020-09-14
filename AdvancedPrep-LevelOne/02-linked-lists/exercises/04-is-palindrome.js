"use strict";

/*
  Implement an algorithm that determines if a given linked list is a palindrome in O(n) time and O(1) space.

  Input: 1 -> 2 -> 2 -> 1
  Output: true

  Input: 1 -> 2 -> 3 -> 4
  Output: false

  α.
*/
export function isPalindrome(head) {
  // Move pointer two to the end of the linked list.
  // Move pointer one with pointer two so that it ends halfway when pointer one reaches the end of the linked list.
  const p1 = head;
  const p2 = head;

  while (p2 !== null && p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  p1 = reverse(p1);
  p2 = head;

  while (p1 !== null) {
    if (p1.data !== p2.data) {
      return false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }

  return true;
};

const reverse = function(head) {
  const prev = null;

  while (head !== null) {
    const next = head.next;

    head.next = prev;
    prev = head;
    head = next;
  }
};