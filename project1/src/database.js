"use strict";

class Item {
  constructor(name, cost, price) {
    //
  }
}

export class ItemDatabase {

  /*
    To-do:

    Collision detection.
  */
  constructor() {
    this.items = {};
  }

  get item(itemName) {
    return this.items[itemName];
  }

  set item(itemName, item) {
    this.items[itemName] = item;
  }
}