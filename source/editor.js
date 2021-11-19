"use strict";

import { addItemGroupToLocalStorage, drawItemGroupRow, getNowStaged } from "./item.js";
import { getItemProperty, getLargeItemType, getRealItemName } from "./type.js";

export class Editor {
  constructor() {
    this.itemType = undefined;

    this.container = document.querySelector(".editor-container");
    this.overlay = document.querySelector(".editor-overlay");
    this.overlay.addEventListener("click", this.hideEditor);

    this.property = {
      name: undefined,
      expDate: undefined,
      numPerBox: undefined,
      storageType: undefined,
      nowStaged: undefined,
    };

    this.infoName = document.querySelector(".editor-section-info-name");
    this.infoStatus = document.querySelector(".editor-section-info-status");

    this.form = document.querySelector(".editor-section-form");
    this.controlNumber = document.querySelector("#control-number");
    this.increaseButton = document.querySelector("#increase");
    this.decreaseButton = document.querySelector("#decrease");

    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    this.increaseButton.addEventListener("click", () => {
      this.controlNumber.value = parseInt(this.controlNumber.value) + 1;
    });
    this.decreaseButton.addEventListener("click", () => {
      this.controlNumber.value = parseInt(this.controlNumber.value) - 1;
    });

    this.addStockButton = document.querySelector("#add");
    this.subStockButton = document.querySelector("#sub");

    this.addStockButton.addEventListener("click", this.addStock);
    this.addStockButton.addEventListener("click", this.hideEditor);
  }

  hideEditor = () => {
    this.container.classList.add("hidden");
  };

  setBasicProperties = (itemType) => {
    this.itemType = itemType;
    this.property.name = getRealItemName(itemType);
    this.property.expDate = getItemProperty(itemType).expDate;
    this.property.numPerBox = getItemProperty(itemType).numPerBox;
    this.property.storageType = getItemProperty(itemType).storageType;
    this.property.nowStaged = getNowStaged(itemType);
  };

  drawBasicProperties() {
    this.infoName.innerHTML = `<p>${this.property.name}</p>`;
    this.infoStatus.innerHTML = `
    <p>유통기한 : ${this.property.expDate}</p>
    <p>박스당 개수 : ${this.property.numPerBox}</p>
    <p>재고 : ${this.property.nowStaged}</p>
    <p>창고 : 2박스+14개</p>`;
  }

  addStock = () => {
    if (this.controlNumber.value <= 0) {
      alert("0보다 큰 정수값을 입력해야 합니다");
      return;
    }
    addItemGroupToLocalStorage(this.itemType, this.controlNumber.value);
    drawItemGroupRow(this.itemType);
  };
}
