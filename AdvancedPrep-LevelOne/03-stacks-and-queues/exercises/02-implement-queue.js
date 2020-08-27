"use strict";

/*
  Complete the following steps _in order_ and label each function signature with its time and space complexity.

  A Node class has been provided for your convenience.

  1. Implement a queue using linked lists, and all of its operations.
  2. Optimize all functions to O(1) time.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.storage = 0;
  }

  dequeue() {
    if (this.head === null) return null;
    const datum = this.head.data;
    this.head = this.head.next;
    this.storage -= 1;
    return datum;
  }

  enqueue(data) {
    const newNode = new Node(data);
    this.tail === null ? this.head = newNode : this.tail.next = newNode;
    this.tail = newNode;
    this.storage += 1;
  }

  peek() {
    return this.head.data;
  }

  isEmpty() {
    return this.storage === 0 ? true : false;
  }

  size() {
    return this.storage;
  }
};

module.exports = Queue;