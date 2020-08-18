"use strict";

/*
  Implement an algorithm that removes duplicate values in a linked list using only O(1) space.
*/
export function removeDuplicates(head) {
  let currentNode = head;
  let nextNode = head.next;

  if (nextNode === null) {
    return "Only one item exits in the data structure";
  }
  while (nextNode !== null) {
    if (currentNode.data === nextNode.data) {
      nextNode = nextNode.next;
      break;
    }
    currentNode = nextNode;
    nextNode = nextNode.next;
  }
};