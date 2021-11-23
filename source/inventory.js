"use strict";

import { getStrExpElement, getIconElement } from "./type.js";

export function addInvenToLocalStorage(itemType, amount) {
  const existAmount = parseInt(getSavedItemInventory(itemType));
  localStorage.setItem(`${itemType}inventory`, existAmount + amount);
}

export function pullItemFromInventory(itemType, amount) {
  const existAmount = parseInt(getSavedItemInventory(itemType));
  localStorage.setItem(`${itemType}inventory`, existAmount - amount);
}

export function getSavedItemInventory(itemType) {
  return localStorage.getItem(`${itemType}inventory`) ? localStorage.getItem(`${itemType}inventory`) : 0;
}

export function drawInventoryRow(itemType) {
  if (!document.querySelector(`#section-inventory #${itemType} .item-flex-wrap`) || !getSavedItemInventory(itemType)) {
    return;
  }
  const inventoryGroupRow = document.querySelector(`#section-inventory #${itemType} .item-flex-wrap`);
  if (inventoryGroupRow) {
    inventoryGroupRow.innerHTML = "";
  }
  inventoryGroupRow.appendChild(makeInvenGroupElement(itemType));
}

function makeInvenGroupElement(itemType) {
  const invenGroupElement = document.createElement("div");
  invenGroupElement.classList.add("table-group-item");
  if (getSavedItemInventory(itemType) > 4) {
    invenGroupElement.appendChild(getStrExpElement(itemType, getSavedItemInventory(itemType)));
  } else if (getSavedItemInventory(itemType) > 0) {
    for (let i = 0; i < getSavedItemInventory(itemType); i++) {
      invenGroupElement.appendChild(getIconElement(itemType));
    }
  }
  return invenGroupElement;
}
