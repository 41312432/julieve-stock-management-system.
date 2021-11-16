"use strict";

import { ItemType, CarrotCake } from "./type.js";

const carrotCakes = localStorage.getItem(ItemType.carrotCake) ? JSON.parse(localStorage.getItem(ItemType.carrotCake)) : [];

export function addItemGroup(itemType, amount) {
  switch (itemType) {
    case ItemType.carrotCake:
      carrotCakes.push(new CarrotCake(amount));
      localStorage.removeItem(ItemType.carrotCake);
      localStorage.setItem(ItemType.carrotCake, JSON.stringify(carrotCakes));
      console.log(carrotCakes);
      break;
  }
}
