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

export default class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  pop() {
    if (this.head === null) return null;
    const data = this.head.data;
    this.head = this.head.next;
    this.size--;
    return data;
  }

  peek() {
    return this.head.data;
  }

  isEmpty() {
    return this.size > 0 ? false : true;
  }
}
