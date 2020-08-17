"use strict";

/*
  Complete the following steps _in order_ and label each function signature with its time and space complexity.

  A Node class has been provided for your convenience.

  1. Implement a stack using linked lists, and all of its operations.
  2. Add function min() that returns the minimum element in the stack. You can assume all data inserted will be numbers. You must preserve the advantages of using stacks: push(), pop(), and min() must all operate in constant time.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class Stack {
  constructor() {}

  push();
  pop();
  peek();
  isEmpty();
}
