"use strict";

import { Actor } from "./actor";

const simulator = () => {
  const dargor = new Actor("dargor, the dark lord", 300, 20, 20);
  const hero = new Actor("protagonist", 100, 10, 10);

  // Fight until one of them dies.
  while (dargor.health < 0 || hero.health < 0) {
    // Dargor the Dark Lord has the initiative.
  }
};
