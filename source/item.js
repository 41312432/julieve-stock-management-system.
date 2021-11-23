"use strict";

import { getTypeProperty, getIconElement, getStrExpElement } from "./type.js";

class Item {
  property = {
    expDate: undefined,
    numPerBox: undefined,
    storageType: undefined,
  };

  constructor(itemType, amount) {
    this.now = new Date();
    this.time = this.now.getTime();
    this.itemType = itemType;
    this.amount = amount;
    this.property = getTypeProperty(itemType);
  }

  setProperty(_property) {
    this.property = _property;
  }
}

export function saveItemGroupToLocalStorage(itemType, amount) {
  const temp = getSavedItemGroupArray(itemType);
  temp.push(new Item(itemType, amount));
  localStorage.removeItem(itemType);
  localStorage.setItem(itemType, JSON.stringify(temp));
}

export function drawItemGroupRow(itemType) {
  const itemGroupRow = document.querySelector(`#${itemType} .item-flex-wrap`);
  if (itemGroupRow) {
    itemGroupRow.innerHTML = "";
  }
  getSavedItemGroupArray(itemType).forEach((itemGroup) => {
    itemGroupRow.appendChild(makeItemGroupElement(itemGroup));
  });
}

export function makeItemGroupElement(itemGroup) {
  const itemGroupElement = document.createElement("div");
  itemGroupElement.classList.add("table-group-item");
  setExpClass(itemGroupElement, itemGroup);
  if (itemGroup.amount > 4) {
    itemGroupElement.appendChild(getStrExpElement(itemGroup.itemType, itemGroup.amount));
  } else {
    for (let i = 0; i < itemGroup.amount; i++) {
      itemGroupElement.appendChild(getIconElement(itemGroup.itemType));
    }
  }
  return itemGroupElement;
}

function setExpClass(element, itemGroup) {
  const today = new Date();
  const dateDiff = Math.ceil((today.getTime() - itemGroup.time) / (1000 * 3600 * 24)) - 1;

  if (dateDiff === itemGroup.property.expDate) {
    element.classList.add("eve");
  } else if (dateDiff > itemGroup.property.expDate) {
    element.classList.add("expired");
  }
}

export function getSavedItemGroupArray(itemType) {
  return localStorage.getItem(itemType) ? JSON.parse(localStorage.getItem(itemType)) : [];
}

export function getNowStock(itemType) {
  const staged = [];
  getSavedItemGroupArray(itemType).forEach((item) => {
    staged.push(item.amount);
  });
  return staged.join(" / ");
}

export function sumOfStock(itemType) {
  const itemGroups = getSavedItemGroupArray(itemType);
  let amount = 0;
  itemGroups.forEach((itemGroup) => {
    amount += itemGroup.amount;
  });
  return parseInt(amount);
}
