"use strict";

export class Actor {
  constructor(name, health, attack, defense) {
    /*
      Add a mana gauge.
      Add a rage meter.

      Add schema checks.
      Add evasion.
      Add inventory.

      Extend Actor.
    */
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;

    this.skills = [];
  }

  get name() {
    return this.name;
  }

  get health() {
    return this.health;
  }

  get attack() {
    return this.attack;
  }

  get defense() {
    return this.defense;
  }

  set name(newName) {
    this.name = newName;
  }

  set health(newHealth) {
    this.health = newHealth;
  }

  set attack(newAttack) {
    this.attack = newAttack;
  }

  set defense(newDefense) {
    this.defense = newDefense;
  }
}
