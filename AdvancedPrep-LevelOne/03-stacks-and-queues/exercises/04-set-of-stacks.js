"use strict";

const Stack = require('./01-implement-stack');

/*
  Implement a data structure that resembles a stack of dinner plates. If the stack gets too tall, the stack of dinner plates may topple over. Therefore, we will want to start a new stack when a certain threshold is reached.

  It should hold multiple stacks, and create a new stack whenever the previous one reaches capacity, but most crucially, it should interface like a normal stack.

  You must also implement a function popAt(), which performs a pop operation on a specific sub-stack.
*/

class SetOfStacks {
  constructor(threshold) {
    this.threshold = threshold;
    this.stacks = [];
    this.storage = 0;
  }

  push(data) {
    const stacks = this.stacks;
    const threshold = this.threshold;

    if (stacks[length - 1] < threshold) {
      stacks[length - 1].push(data);
    } else {
      const newStack = new Stack();

      newStack.push(data);
      stacks.push(newStack);
    }
    this.storage++;
  }

  pop() {
    if (this.storage === 0) return null;

    const stacks = this.stacks;

    this.storage--;
    return stacks[stacks.length - 1].pop();
  }

  popAt(index) {
    if (this.storage === 0) return null;

    const stacks = this.stacks;

    this.storage--;
    return !stacks[index] ? null : stacks[index].pop();
  }

  size() {
    return this.storage;
  }

  isEmpty() {
    return this.storage === 0 ? true : false;
  }

  peek() {
    if (this.storage === 0) return null;

    return this.stacks[this.stacks.length].peek();
  }
};

module.exports = SetOfStacks;