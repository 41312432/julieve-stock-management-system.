"use strict";

import { getItemPropertyByType, getLargeItemType, ItemType } from "./type.js";

const todayDate = new Date().getDate();

class Item {
  property = {
    expDate: undefined,
    numPerBox: undefined,
    storageType: undefined,
  };

  constructor(itemType, amount) {
    this.nowDate = new Date();
    this.ID = this.nowDate.getTime();
    this.itemType = itemType;
    this.amount = amount;
    this.property = getItemPropertyByType(itemType);
  }

  setProperty(_property) {
    this.property = _property;
  }
}

export function addItemGroupToLocalStorage(itemType, amount) {
  switch (getLargeItemType(itemType)) {
    case ItemType.sliceCake:
      const temp = getLocalItemGroupArray(itemType);
      temp.push(new Item(itemType, amount));
      localStorage.removeItem(itemType);
      localStorage.setItem(itemType, JSON.stringify(temp));
      break;
  }
}

export function drawItemGroupFromLocalStorage(itemType) {
  const itemGroupRow = document.querySelector(`#${itemType} .item-flex-wrap`);
  getLocalItemGroupArray(itemType).forEach((itemGroup) => {
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

export function getLocalItemGroupArray(itemType) {
  return localStorage.getItem(itemType) ? JSON.parse(localStorage.getItem(itemType)) : [];
}
