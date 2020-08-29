"use strict";

import Queue from "./02-implement-queue";

/*
  Implement a class AnimalShelter that mimics an animal shelter's inventory. The shelter only holds dogs and cats. Customers can only adopt the eldest animals first (based on arrival time), or they can specify if they would like a cat or a dog (and thus will receive the oldest animal of that type).

  The data structure must support the following operations at minimum:
  - enqueueAny
  - dequeueAny
  - dequeueDog
  - dequeueCat
*/
export class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueueAny(animal) {
    animal === "cat" ? this.cats.enqueue(animal) : this.dogs.enqueue(animal);
  }

  dequeueAny() {
    const dog = this.dogs.peek();
    const cat = this.cats.peek();

    if (dog.arrival < cat.arrival) return this.dogs.dequeue();
    else if (dog.arrival > cat.arrival) return this.cats.dequeue();
    else {
      this.cats.size() > this.dogs.size()
        ? this.cats.dequeue()
        : this.dogs.dequeue();
    }
  }

  dequeueDog() {
    return this.dogs.dequeue();
  }

  dequeueCat() {
    return this.cats.dequeue();
  }
}

export class AnimalShelter1 {
  constructor() {
    this.queue = null;
  }

  enqueueAny(animal) {
    this.queue.enqueue(animal);
  }

  dequeueAny() {
    return this.dequeue();
  }

  dequeueDog() {
    while (this.queue.peek() !== null) {
      const animal = this.queue.peek();
      animal === "cat"
        ? this.queue.enqueue(this.queue.dequeue())
        : this.dequeue();
    }

    return null;
  }

  dequeueCat() {
    while (this.queue.peek() !== null) {
      const animal = this.queue.peek();
      animal === "dog"
        ? this.queue.enqueue(this.queue.dequeue())
        : this.dequeue();
    }

    return null;
  }
}
