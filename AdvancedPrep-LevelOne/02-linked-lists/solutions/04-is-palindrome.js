"use strict";

/*
  Implement an algorithm that determines if a given linked list is a palindrome in O(n) time and O(1) space.

  Input: 1 -> 2 -> 2 -> 1
  Output: true

  Input: 1 -> 2 -> 3 -> 4
  Output: false

  α.
*/

/*
  Time: O(n)
  Space: O(1)
*/
function reverseList(head) {
  let prev = null;
  let next = null;

  while (head !== null) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

export function isPalindrome(head) {
  if (head === null || head.next === null) return true;

  let p1 = head;
  let p2 = head.next;

  while (p1.next !== null && p2.next.next !== null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  p1.next = reverseList(p1.next);
  p1 = p1.next;

  while (p1 !== null) {
    if (head.data !== p1.data) return false;

    head = head.next;
    p1 = p1.next;
  }

  return true;
}
