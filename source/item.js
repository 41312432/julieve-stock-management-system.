"use strict";

import { getItemProperty, getItemTypeIcon } from "./type.js";

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
    this.property = getItemProperty(itemType);
  }

  setProperty(_property) {
    this.property = _property;
  }
}

export function addItemGroupToLocalStorage(itemType, amount) {
  const temp = getSavedItemGroupArray(itemType);
  temp.push(new Item(itemType, amount));
  localStorage.removeItem(itemType);
  localStorage.setItem(itemType, JSON.stringify(temp));
}

export function drawItemGroupRow(itemType) {
  const itemGroupRow = document.querySelector(`#${itemType} .item-flex-wrap`);
  cleanInnerHTML(itemGroupRow);
  getSavedItemGroupArray(itemType).forEach((itemGroup) => {
    itemGroupRow.appendChild(makeItemGroupElement(itemGroup));
  });
}

function makeItemGroupElement(itemGroup) {
  const itemGroupElement = document.createElement("div");
  itemGroupElement.classList.add("table-group-item");
  setExpClass(itemGroupElement, itemGroup);
  for (let i = 0; i < itemGroup.amount; i++) {
    itemGroupElement.innerText += getItemTypeIcon(itemGroup.itemType);
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

export function getNowStaged(itemType) {
  const nowStock = [];
  getSavedItemGroupArray(itemType).forEach((item) => {
    nowStock.push(item.amount);
  });
  return nowStock.join(" / ");
}

export function getStockAmount(itemType) {
  const itemGroups = getSavedItemGroupArray(itemType);
  let amount = 0;
  itemGroups.forEach((itemGroup) => {
    amount += itemGroup.amount;
  });
  return parseInt(amount);
}

function cleanInnerHTML(element) {
  if (element) {
    element.innerHTML = "";
  }
}
