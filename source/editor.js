"use strict";

import { addInvenToLocalStorage, drawInventoryRow, getSavedItemInventory, isNoInven, pullItemFromInventory } from "./inventory.js";
import { saveItemGroupToLocalStorage, drawItemGroupRow, getNowStock, getSavedItemGroupArray, sumOfStock } from "./item.js";
import { getTypeProperty, getRealItemName } from "./type.js";

export class Editor {
  constructor() {
    this.itemType = undefined;
    this.property = {
      name: undefined,
      expDate: undefined,
      numPerBox: undefined,
      storageType: undefined,
      nowStaged: undefined,
    };

    this.container = document.querySelector(".editor-container");
    this.overlay = document.querySelector(".editor-overlay");
    this.overlay.addEventListener("click", () => {
      this.container.classList.add("hidden");
    });

    this.forStock = document.querySelector(".editor-section-control-stock");
    this.forInven = document.querySelector(".editor-section-control-inventory");

    this.itemName = document.querySelector(".editor-heading");
    this.infoStatus = document.querySelector(".editor-section-status");

    this.form = document.querySelector(".editor-section-form");
    this.controlNumber = document.querySelector("#control-number");
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    this.addBoxButton = document.querySelector("#box");
    this.resetButton = document.querySelector("#reset");
    this.increaseButton = document.querySelector("#increase");
    this.decreaseButton = document.querySelector("#decrease");
    this.addStockButton = document.querySelector("#add");
    this.subStockButton = document.querySelector("#sub");
    this.addInventoryButton = document.querySelector("#inven");

    this.increaseButton.addEventListener("click", () => {
      this.controlNumber.value = parseInt(this.controlNumber.value) + 1;
    });
    this.decreaseButton.addEventListener("click", () => {
      this.controlNumber.value = parseInt(this.controlNumber.value) - 1;
    });
    this.addBoxButton.addEventListener("click", this.addBox);
    this.resetButton.addEventListener("click", this.reset);
    this.addStockButton.addEventListener("click", this.addStock);
    this.subStockButton.addEventListener("click", this.subStock);
    this.addInventoryButton.addEventListener("click", this.addInven);
  }

  checkSectionType = (sectionID) => {
    if (sectionID == "section-inventory") {
      this.forInven.classList.remove("hidden");
      this.forStock.classList.add("hidden");
    } else {
      this.forStock.classList.remove("hidden");
      this.forInven.classList.add("hidden");
    }
  };

  setBasicProperties = (itemType) => {
    this.itemType = itemType;
    this.property.name = getRealItemName(itemType);
    this.property.expDate = getTypeProperty(itemType).expDate;
    this.property.numPerBox = getTypeProperty(itemType).numPerBox;
    this.property.storageType = getTypeProperty(itemType).storageType;
    this.property.nowStaged = getNowStock(itemType);
  };

  drawBasicProperties() {
    this.itemName.innerHTML = `<p>${this.property.name}</p>`;
    this.infoStatus.innerHTML = `
    <p>???????????? : ${this.property.expDate}</p>
    <p>????????? ?????? : ${this.property.numPerBox}</p>
    <p>?????? : ${this.property.nowStaged}</p>
    <p>?????? : ${getSavedItemInventory(this.itemType)}</p>`;
  }

  addStock = () => {
    if (isNoInven(this.itemType)) {
      saveItemGroupToLocalStorage(this.itemType, parseInt(this.controlNumber.value));
      drawItemGroupRow(this.itemType);
      this.container.classList.add("hidden");
    } else if (this.controlNumber.value > getSavedItemInventory(this.itemType)) {
      alert("????????? ?????? ????????? ?????? ???????????? ???????????? ?????????");
    } else if (this.controlNumber.value <= 0) {
      alert("0?????? ??? ???????????? ???????????? ?????????");
    } else {
      saveItemGroupToLocalStorage(this.itemType, parseInt(this.controlNumber.value));
      drawItemGroupRow(this.itemType);
      this.container.classList.add("hidden");
      pullItemFromInventory(this.itemType, this.controlNumber.value);
      drawInventoryRow(this.itemType);
    }
  };

  subStock = () => {
    let value = this.controlNumber.value;
    if (value <= 0) {
      alert("0?????? ??? ???????????? ???????????? ?????????");
    } else if (value > sumOfStock(this.itemType)) {
      alert("?????? ???????????? ?????? ?????? ???????????? ?????????");
    } else {
      const itemGroups = getSavedItemGroupArray(this.itemType);
      while (value) {
        const itemGroup = itemGroups.shift();
        if (value >= itemGroup.amount) {
          value -= itemGroup.amount;
        } else {
          itemGroup.amount -= value;
          itemGroups.unshift(itemGroup);
          value = 0;
        }
      }
      localStorage.setItem(this.itemType, JSON.stringify(itemGroups));
      drawItemGroupRow(this.itemType);
      this.container.classList.add("hidden");
    }
  };

  addInven = () => {
    if (this.controlNumber.value <= 0) {
      alert("0?????? ??? ???????????? ???????????? ?????????");
    } else {
      addInvenToLocalStorage(this.itemType, parseInt(this.controlNumber.value));
      drawInventoryRow(this.itemType);
      this.container.classList.add("hidden");
    }
  };

  addBox = () => {
    this.controlNumber.valueAsNumber += this.property.numPerBox;
  };

  reset = () => {
    this.controlNumber.valueAsNumber = 0;
  };
}
