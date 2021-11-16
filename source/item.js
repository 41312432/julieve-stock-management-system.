"use strict";

import { ItemType, SliceCake } from "./type.js";

const carrotCakes = localStorage.getItem(ItemType.carrotCake) ? JSON.parse(localStorage.getItem(ItemType.carrotCake)) : [];

export function addItemGroup(itemType, amount) {
  switch (itemType) {
    case ItemType.carrotCake:
      carrotCakes.push(new SliceCake(itemType, amount));
      localStorage.removeItem(ItemType.carrotCake);
      localStorage.setItem(ItemType.carrotCake, JSON.stringify(carrotCakes));
      console.log(carrotCakes);
      break;
  }
}
