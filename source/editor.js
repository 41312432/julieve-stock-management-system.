"use strict";

import { getLocalItemGroupArray, getNowStaged } from "./item.js";
import { getItemPropertyByType, getLargeItemType, getRealItemName } from "./type.js";

export class Editor {
  constructor() {
    this.container = document.querySelector(".editor-container");
    this.overlay = document.querySelector(".editor-overlay");
    this.overlay.addEventListener("click", this.hideEditor);

    this.numer = document.querySelector(".editor-section-control-number > p");

    this.property = {
      name: undefined,
      expDate: undefined,
      numPerBox: undefined,
      storageType: undefined,
      nowStaged: undefined,
    };

    this.infoName = document.querySelector(".editor-section-info-name");
    this.infoStatus = document.querySelector(".editor-section-info-status");
  }

  hideEditor = () => {
    this.container.classList.add("hidden");
  };

  setBasicProperties = (itemType) => {
    this.property.name = getRealItemName(itemType);
    this.property.expDate = getItemPropertyByType(itemType).expDate;
    this.property.numPerBox = getItemPropertyByType(itemType).numPerBox;
    this.property.storageType = getItemPropertyByType(itemType).storageType;
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
}
