"use strict";

import { ItemType, SliceCake } from "./type.js";

const todayDate = new Date().getDate();

export function addItemGroupToLocalStorage(itemType, amount) {
  switch (itemType) {
    case ItemType.creamCake:
    case ItemType.cheezeCake:
    case ItemType.carrotCake:
    case ItemType.strawberryCake:
      const temp = localStorage.getItem(itemType) ? JSON.parse(localStorage.getItem(itemType)) : [];
      temp.push(new SliceCake(itemType, amount));
      localStorage.removeItem(itemType);
      localStorage.setItem(itemType, JSON.stringify(temp));
      break;
  }
}

export function drawItemGroupFromLocalStorage(itemType) {
  const itemGroupRow = document.querySelector(`#${itemType} .item-flex-wrap`);
  const temp = localStorage.getItem(itemType) ? JSON.parse(localStorage.getItem(itemType)) : [];
  console.dir(temp);
  temp.forEach((itemGroup) => {
    itemGroupRow.appendChild(makeItemGroupElement(itemGroup));
  });
}

function makeItemGroupElement(itemGroup) {
  const itemGroupElement = document.createElement("div");
  itemGroupElement.classList.add("table-group-item");
  if (todayDate - itemGroup.getDate() === 1) {
    itemGroupElement.classList.add("eve");
  } else if (todayDate - itemGroup.getDate() < 1) {
    itemGroupElement.classList.add("expired");
  }
  for (let i = 0; i < itemGroup.amount; i++) {
    itemGroupElement.innerText += "🍰 ";
  }
  return itemGroupElement;
}
