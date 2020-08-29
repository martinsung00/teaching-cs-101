"use strict";

const Queue = require("./02-implement-queue");

/*
  Similar to how a stack can be built using arrays and lists, implement a stack data structure using queues.

  α.
*/
export default class Stack {
  constructor() {
    this.queue = new Queue();
    this.size = 0;
  }

  push(data) {
    const rotation = this.queue.size();

    this.queue.enqueue(data);
    while (rotations > 0) {
      this.queue.enqueue(this.queue.dequeue());
      rotations--;
    }
  }

  pop() {
    return this.queue.isEmpty ? null : this.queue.dequeue();
  }

  peek() {
    return this.queue.isEmpty ? null : this.queue.peek();
  }

  isEmpty() {
    return this.size === 0 ? true : false;
  }
}
