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
  let pointerOne = head;
  let pointerTwo = head;

  while(pointer !== null && pointer.next !== null) {
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next.next;
  }

  // Reset pointer one back to head.
  pointerTwo = head;
  pointerOne = reverse(pointerOne);

  while (pointerOne !== null) {
    if (pointerOne.val !== pointerTwo.val) {
      return false;
    }
    pointerOne = pointerOne.next;
    pointerTwo = pointerTwo.next;
  }
  return true;
};

const reverse = function(head) {
  let prevNode = null;

  while(head !== null) {
    let nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode;
  }
  return prevNode;
};