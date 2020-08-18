"use strict";

import Queue from "./02-implement-queue";

/*
  Similar to how a stack can be built using arrays and lists, implement a stack data structure using queues.

  α.
*/

export class Stack {
  constructor() {
    this.queue = new Queue();
    this.temp = new Queue();
    this.size = 0;
  }

  push(data) {
    this.temp.enqueue(data);

    while (!this.queue.isEmpty()) {
      this.temp.enqueue(this.queue.dequeue());
    }

    const temp = queue;
    this.queue = temp;
    this.temp = temp;
  }

  pop() {
    return this.isEmpty() ? null : this.queue.dequeue();
  }

  peek() {
    return this.isEmpty() ? null : this.queue.peek();
  }

  isEmpty() {
    return this.size > 0 ? false : true;
  }
}

export class Stack1 extends Stack {
  constructor() {
    super();
  }

  push(data) {
    this.queue.enqueue(data);
    this.size++;
  }

  pop() {
    if (this.queue.isEmpty()) return null;

    while (!this.queue.isEmpty()) {
      this.temp.enqueue(this.queue.dequeue());
    }

    const data = this.queue.dequeue();
    this.size--;

    const temp = this.queue;
    this.queue = this.temp;
    this.p2 = temp;

    return data;
  }
}
