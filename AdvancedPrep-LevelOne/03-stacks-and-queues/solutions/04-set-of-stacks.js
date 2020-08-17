"use strict";

/*
  Implement a data structure that resembles a stack of literal plates. If the stack gets too tall, the stack of dinner plates may topple over. Therefore, we will want to start a new stack when a certain threshold is reached.

  It should hold multiple stacks, and create a new stack whenever the previous one reaches capacity, but most crucially, it should interface like a normal stack. The only public methods should be push() and pop().

  You must also implement a function popAt(), which performs a pop operation on a specific sub-stack.
*/

export default class SetOfStacks {
  constructor(threshold) {
    this.threshold = threshold;
  }
}
