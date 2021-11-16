"use strict";

export const ItemType = Object.freeze({
  carrotCake: "carrotCake",
});

export const storageType = Object.freeze({
  frozen: "frozen",
  refridgereted: "refridgerated",
  roomTemperatured: "roomTemperatured",
  showCased: "showCased",
});

class Item {
  //interface
  constructor() {
    this.ID = undefined;
    this.nowDate = undefined;
    this.expDate = undefined;
    this.itemType = undefined;
    this.storageType = undefined;
    this.numPerBox = undefined;
    this.amount = undefined;
    this.createDateStr = undefined;
  }
}
//
export class SliceCake extends Item {
  constructor(itemType, amount) {
    super();
    this.ID = this.nowDate.getTime();
    this.amount = amount;
    this.itemType = itemType;
    this.expDate = 5;
    this.storageType = storageType.showCased;
    this.numPerBox = 8;
    this.nowDate = new Date();
    this.createDateStr = `${this.nowDate.getMonth() + 1}월 ${this.nowDate.getDate()}일 ${this.nowDate.getHours()}시 ${this.nowDate.getMinutes()}분`;
  }
}
