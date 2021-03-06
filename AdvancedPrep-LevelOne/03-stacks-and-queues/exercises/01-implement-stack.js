"use strict";

/*
  Complete the following steps _in order_ and label each function signature with its time and space complexity.

  A Node class has been provided for your convenience.

  1. Implement a stack using linked lists, and all of its operations.
  2. Optimize all functions to O(1) time.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.storage = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.storage++;
  }

  pop() {
    const datum = this.head.data;

    if (this.head === null) return null;
    this.head = this.head.next;
    this.storage--;
    return datum;
  }

  peek() {
    if (this.head === null) return null;
    return this.head.data
  }

  isEmpty() {
    return this.storage === 0 ? true : false
  }

  size() {
    return this.storage;
  }
};

module.exports = Stack;