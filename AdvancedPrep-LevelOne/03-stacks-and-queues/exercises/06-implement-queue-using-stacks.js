"use strict";

import Stack from "./01-implement-stack";

/*
  Similar to how a queue can be built using arrays and lists, implement a queue data structure using stacks.

  α.
*/
export default class Queue {
  constructor() {
    this.mainStack = new Stack();
    this.secondary = new Stack();
    this.size = 0;
  }

  push(data) {
    this.mainStack.push(data);
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const main = this.mainStack;
    const second = this.secondary;

    if (second.isEmpty()) {
      while(!main.isEmpty()) {
        second.push(main.pop());
      }
    }
    this.size--;
    return second.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    const main = this.mainStack;
    const second = this.secondary;

    if (second.isEmpty()) {
      while(!main.isEmpty()) {
        second.push(main.pop());
      }
    }
    return second.pop();
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}
