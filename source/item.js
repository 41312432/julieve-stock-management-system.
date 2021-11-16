"use strict";

import { ItemType, SliceCake } from "./type.js";

export function addItemGroup(itemType, amount) {
  switch (itemType) {
    case ItemType.creamCake:
    case ItemType.cheezeCake:
    case ItemType.carrotCake:
      const temp = localStorage.getItem(itemType) ? JSON.parse(localStorage.getItem(itemType)) : [];
      temp.push(new SliceCake(itemType, amount));
      localStorage.removeItem(itemType);
      localStorage.setItem(itemType, JSON.stringify(temp));
      break;
  }
}
