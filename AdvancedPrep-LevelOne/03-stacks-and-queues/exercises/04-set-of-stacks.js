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
    const limit = this.threshold;
    const stacks = this.stacks;

    if (!stacks[stacks.length - 1] || stacks[stacks.length - 1].size() >= limit) {
      const newStack = new Stack;

      newStack.push(data);
      stacks.push(newStack);
    } else {
      stacks[stacks.length - 1].push(data);
    }
    this.storage += 1;
  }

  pop() {
    const stacks = this.stacks;

    if (this.isEmpty) return null;
    let datum = stacks[stacks.length - 1].pop();
    return datum;
  }

  popAt(index) {
    const stacks = this.stacks;
    let datum;

    if (this.isEmpty() || !stacks[index]) {
      return null;
    } else {
      datum = stacks[index].peek();
    }
    stacks[index].pop();
    this.storage -= 1;
    return datum;
  }

  size() {
    return this.storage;
  }

  isEmpty() {
    return this.storage === 0 ? true : false;
  }

  peek() {
    const stacks = this.stacks
    return this.isEmpty() ? null : stacks[stacks.length - 1].peek();
  }
};

module.exports = SetOfStacks;