"use strict";

import Stack from "./01-implement-stack";

/*
  Implement a data structure that resembles a stack of dinner plates. If the stack gets too tall, the stack of dinner plates may topple over. Therefore, we will want to start a new stack when a certain threshold is reached.

  It should hold multiple stacks, and create a new stack whenever the previous one reaches capacity, but most crucially, it should interface like a normal stack.

  You must also implement a function popAt(), which performs a pop operation on a specific sub-stack.
*/

export default class SetOfStacks {
  constructor(threshold) {
    this.threshold = threshold; // Assuming a positive non-zero integer.
    this.stacks = [];
    this.size = 0;
  }

  push(data) {
    if (this.stacks[this.stacks.length - 1].length >= threshold) {
      const newStack = new Stack();
      newStack.push(data);

      this.stacks.push(newStack);
    } else {
      this.stacks[this.stacks.length - 1].push(data);
    }

    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;

    const data = this.stacks[0].pop();
    this.size--;

    return data;
  }

  peek() {
    return this.isEmpty() ? null : this.stacks[0].peek();
  }

  isEmpty() {
    return this.size > 0 ? false : true;
  }

  popAt(subStack) {
    if (this.isEmpty()) return null;

    const data = this.stacks[subStack].pop();
    this.size--;

    return data;
  }
}
