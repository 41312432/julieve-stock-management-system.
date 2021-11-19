"use strict";

export const ItemType = Object.freeze({
  sliceCake: "sliceCake",
  creamCake: "creamCake",
  carrotCake: "carrotCake",
  cheezeCake: "cheezeCake",
  strawberryCake: "strawberryCake",
  //
  Macaron: "Macaron",
  strawberryMacaron: "strawberryMacaron",
  chocolateMacaron: "chocolateMacaron",
  vanillaMacaron: "vanillaMacaron",
  injeolmiMacaron: "injeolmiMacaron",
  figMacaron: "figMacaron",
  citronMacaron: "citronMacaron",
  greenteaMacaron: "greenteaMacaron",
  butterMacaron: "butterMacaron",
  coffeMacaron: "coffeMacaron",
  peanutbutterMacaron: "peanutbutterMacaron",
  //
  milkteaSignature: "milkteaSignature",
  //
  coldebrewBottle: "coldbrewBottle",
  //
  SeasonCookie: "SeasonCookie",
  oneSeasonCookie: "oneSeasonCookie",
  twoSeasonCookie: "twoSeasonCookie",
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
    case ItemType.strawberryMacaron:
      return "딸기 마카롱";
    case ItemType.chocolateMacaron:
      return "쇼콜라 마카롱";
    case ItemType.vanillaMacaron:
      return "바닐라 마카롱";
    case ItemType.injeolmiMacaron:
      return "인절미 마카롱";
    case ItemType.figMacaron:
      return "무화과 마카롱";
    case ItemType.citronMacaron:
      return "유자 마카롱";
    case ItemType.greenteaMacaron:
      return "녹차 마카롱";
    case ItemType.butterMacaron:
      return "앙버터 마카롱";
    case ItemType.coffeMacaron:
      return "커피 마카롱";
    case ItemType.peanutbutterMacaron:
      return "땅콩버터 마카롱";
    case ItemType.milkteaSignature:
      return "밀크티 시그니쳐";
    case ItemType.coldebrewBottle:
      return "콜드브루 원액";
    default:
      return "NO ITEM INFO";
  }
}

export function getLargeItemType(itemType) {
  switch (itemType) {
    case ItemType.creamCake:
    case ItemType.cheezeCake:
    case ItemType.carrotCake:
    case ItemType.strawberryCake:
      return ItemType.sliceCake;
    case ItemType.strawberryMacaron:
    case ItemType.chocolateMacaron:
    case ItemType.vanillaMacaron:
    case ItemType.injeolmiMacaron:
    case ItemType.figMacaron:
    case ItemType.citronMacaron:
    case ItemType.greenteaMacaron:
    case ItemType.butterMacaron:
    case ItemType.coffeMacaron:
    case ItemType.peanutbutterMacaron:
      return ItemType.Macaron;
    case ItemType.milkteaBottle:
      return ItemType.milkteaSignature;
    case ItemType.coldebrewBottle:
      return ItemType.coldbrewBottle;
    case ItemType.oneSeasonCookie:
    case ItemType.twoSeasonCookie:
      return ItemType.SeasonCookie;
  }
}

export function getItemProperty(itemType) {
  switch (getLargeItemType(itemType)) {
    case ItemType.sliceCake:
      return {
        expDate: 5,
        numPerBox: 8,
        storageType: StorageType.showCased,
      };
    case ItemType.Macaron:
      return {
        expDate: 15,
        numPerBox: 32,
        storageType: StorageType.showCased,
      };
    case ItemType.milkteaSignature:
      return {
        expDate: 5,
        numPerBox: 1,
        storageType: StorageType.showCased,
      };
    case ItemType.coldebrewBottle:
      return {
        expDate: 15,
        numPerBox: 5,
        storageType: StorageType.showCased,
      };
    case ItemType.SeasonCookie:
      return {
        expDate: null,
        numPerBox: null,
        storageType: StorageType.showCased,
      };
  }
}

export function getItemTypeIcon(itemType) {
  switch (getLargeItemType(itemType)) {
    case ItemType.sliceCake:
      return "🍰 ";
    case ItemType.Macaron:
      return "🪀 ";
  }
}
