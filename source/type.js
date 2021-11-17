"use strict";

export const ItemType = Object.freeze({
  sliceCake: "sliceCake",
  creamCake: "creamCake",
  carrotCake: "carrotCake",
  cheezeCake: "cheezeCake",
  strawberryCake: "strawberryCake",
});

export const StorageType = Object.freeze({
  frozen: "frozen",
  refridgereted: "refridgerated",
  roomTemperatured: "roomTemperatured",
  showCased: "showCased",
});

export function getRealItemName(itemType) {
  switch (itemType) {
    case ItemType.creamCake:
      return "생크림 케이크";
    case ItemType.carrotCake:
      return "당근 케이크";
    case ItemType.cheezeCake:
      return "바스크 치즈 케이크";
    case ItemType.strawberryCake:
      return "딸기 케이크";
    default:
      return "NONE";
  }
}

export function getLargeItemType(itemType) {
  switch (itemType) {
    case ItemType.creamCake:
    case ItemType.cheezeCake:
    case ItemType.carrotCake:
    case ItemType.strawberryCake:
      return ItemType.sliceCake;
  }
}

export function getItemPropertyByType(itemType) {
  switch (getLargeItemType(itemType)) {
    case ItemType.sliceCake:
      return {
        expDate: 5,
        numPerBox: 8,
        storageType: StorageType.showCased,
      };
  }
}
