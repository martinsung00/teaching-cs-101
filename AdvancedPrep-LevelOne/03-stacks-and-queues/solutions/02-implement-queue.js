"use strict";

/*
  Complete the following steps _in order_ and label each function signature with its time and space complexity.

  A Node class has been provided for your convenience.

  1. Implement a queue using linked lists, and all of its operations.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Queue {
  constructor() {}

  enqueue();
  dequeue();
  peek();
  isEmpty();
}
