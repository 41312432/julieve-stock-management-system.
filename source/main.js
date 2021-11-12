"use strict";

const storageType = Object.freeze({
  frozen: "frozen",
  refridgereted: "refridgerated",
  faceUp: "faceUp",
  showCase: "showCase",
});

class Item {
  //interface
  constructor() {
    this.nowDate = undefined;
    this.expDate = undefined;
    this.itemType = undefined;
    this.storageType = undefined;
    this.numPerBox = undefined;
    this.amount = undefined;
  }
}
//
class SconeOne extends Item {
  constructor() {
    super();
    this.expDate = null;
    this.storageType = storageType.frozen;
    this.numPerBox = 22;
  }
}
class SconeOne extends Item {
  constructor() {
    super();
    this.expDate = null;
    this.storageType = storageType.frozen;
    this.numPerBox = 18;
  }
}
//
class PlainScone extends SconeOne {
  constructor(amount, date = new Date()) {
    super();
    this.nowDate = date.now();
    this.itemType = "PlainScone";
    this.amount = amount;
  }
}
class CheezeScone extends SconeOne {
  constructor(amount, date = new Date()) {
    super();
    this.nowDate = date.now();
    this.itemType = "CheezeScone";
    this.amount = amount;
  }
}

class ButterPlainScone extends SconeTwo {
  constructor(amount, date = new Date()) {
    super();
    this.nowDate = date.now();
    this.itemType = "TwoPlainScone";
    this.amount = amount;
  }
}
