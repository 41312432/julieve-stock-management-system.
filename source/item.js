"use strict";

import { getItemPropertyByType, getLargeItemType, ItemType } from "./type.js";

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
  cleanInnerHTML(itemGroupRow);
  getLocalItemGroupArray(itemType).forEach((itemGroup) => {
    itemGroupRow.appendChild(makeItemGroupElement(itemGroup));
  });
}

function makeItemGroupElement(itemGroup) {
  const itemGroupElement = document.createElement("div");
  itemGroupElement.classList.add("table-group-item");
  giveExpClass(itemGroupElement, itemGroup);
  for (let i = 0; i < itemGroup.amount; i++) {
    itemGroupElement.innerText += "🍰 ";
  }
  return itemGroupElement;
}

function giveExpClass(element, itemGroup) {
  const today = new Date();
  const dateDiff = Math.ceil((today.getTime() - itemGroup.time) / (1000 * 3600 * 24)) - 1;

  if (dateDiff === itemGroup.property.expDate) {
    element.classList.add("eve");
  } else if (dateDiff > itemGroup.property.expDate) {
    element.classList.add("expired");
  }
}

export function getLocalItemGroupArray(itemType) {
  return localStorage.getItem(itemType) ? JSON.parse(localStorage.getItem(itemType)) : [];
}

export function getNowStaged(itemType) {
  const nowStock = [];
  getLocalItemGroupArray(itemType).forEach((item) => {
    nowStock.push(item.amount);
  });
  return nowStock.join(" / ");
}

function cleanInnerHTML(element) {
  if (element) {
    element.innerHTML = "";
  }
}
