"use strict";

const Queue = require("./02-implement-queue");
const builtinModules = require("module");

/*
  Implement a class AnimalShelter that mimics an animal shelter's inventory. The shelter only holds dogs and cats. Customers can only adopt the eldest animals first (based on arrival time), or they can specify if they would like a cat or a dog (and thus will receive the oldest animal of that type).

  The data structure must support the following operations at minimum:
  - enqueueAny
  - dequeueAny
  - dequeueDog
  - dequeueCat
*/

class AnimalShelter {
  constructor() {
    this.cats = new Queue();
    this.dogs = new Queue();
  }

  enqueueAny(type) {
    type === 'cat' ? this.cats.enqueue(type) : this.dogs.enqueue(type);
  }

  dequeueAny() {
    if (!this.cats.arrval || !this.dogs.arrival) {
      return this.cats.size > this.dogs.size ? this.dequeueCat() : this.dequeueDog();
    } else {
      return this.cats.arrival > this.dogs.arrival ? this.dequeueCat() : this.dequeueDog();
    }
  }

  dequeueDog() {
    const dog = this.dogs.peek();
    this.dogs.dequeue();

    return dog;
  }

  dequeueCat() {
    const cat = this.cats.peek();
    this.cats.dequeue();

    return cat;
  }
};


module.exports = AnimalShelter;