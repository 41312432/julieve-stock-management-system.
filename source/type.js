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
class SliceCake extends Item {
  constructor() {
    super();
    this.expDate = 5;
    this.itemType = "cake";
    this.storageType = storageType.showCased;
    this.numPerBox = null;
    this.nowDate = new Date();
    this.ID = this.nowDate.getTime();
    this.createDateStr = `${this.nowDate.getMonth() + 1}월 ${this.nowDate.getDate()}일 ${this.nowDate.getHours()}시 ${this.nowDate.getMinutes()}분`;
  }
}
export class CarrotCake extends SliceCake {
  constructor(amount) {
    super();
    this.amount = amount;
    this.itemType = "carrotCake";
  }
}
