"use strict";

/*
  Given a circular linked list, implement an algorithm that returns the node that marks the beginning of the loop using only O(1) space. You can assume that the input list is guaranteed to have such a loop.

  New keyword: "circular linked list"

  A circular linked list is a linked list where any of its given nodes points to an earlier node, making a loop. You can think of it as a corrupted linked list.

  Return the node where the cycle begins.

  Input: A -> B -> C -> D -> E -> C (the same C as earlier)
  Output: C

  α.
*/
export function findLoop(head) {
  // Traverse linked list, compare current node to next node until node matches.
  let p1 = head;
  let p2 = head.next;

  while (p2.next !== null) {
    if (p2 === p1) {
      let p3 = head;

      while (p3 !== p1) {
        p1 = p1.next;
        p3 = p3.next;
      }

      return p3;
    }
  }

  return null;
};