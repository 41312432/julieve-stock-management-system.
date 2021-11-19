"use strict";

export const ItemType = Object.freeze({
  //쇼케이스
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
  coldbrewBottle: "coldbrewBottle",
  //
  julieCookie: "julieCookie",
  oneJulieCookie: "oneJulieCookie",
  twoJulieCookie: "twoJulieCookie",
  //냉장보관
  Pie: "Pie",
  walnutPie: "walnutPie",
  lemonPie: "lemonPie",
  chocolatePie: "chocolatePie",
  //
  urbanCookie: "urbanCookie",
  walnutDoubleChocolate: "walnutDoubleChocolate",
  redvelvetSmore: "redvelvetSmore",
  darkchocolateDalgona: "darkchocolateDalgona",
  peanutbutterStrawberry: "peanutbutterStrawberry",
  strawberryBanana: "strawberryBanana",
  //
  Lamington: "Laminton",
  chocolateLamington: "chocolateLamington",
  lemonLamington: "lemonLamington",
  greenteaLamington: "greenteaLamington",
  strawberryLamington: "strawberryLamington",
  //
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
    case ItemType.coldbrewBottle:
      return "콜드브루 보틀";
    case ItemType.oneJulieCookie:
      return "줄리쿠키 시즌1";
    case ItemType.twoJulieCookie:
      return "줄리쿠키 시즌2";
    case ItemType.walnutPie:
      return "호두파이";
    case ItemType.lemonPie:
      return "레몬파이";
    case ItemType.chocolatePie:
      return "머드초코파이";
    case ItemType.walnutDoubleChocolate:
      return "호두더블초콜릿";
    case ItemType.redvelvetSmore:
      return "레드벨벳스모어";
    case ItemType.darkchocolateDalgona:
      return "다크초코달고나";
    case ItemType.peanutbutterStrawberry:
      return "피넛버터딸기잼";
    case ItemType.strawberryBanana:
      return "말랑딸기바나나";
    case ItemType.chocolateLamington:
      return "초코 래잉턴";
    case ItemType.lemonLamington:
      return "레몬 래잉턴";
    case ItemType.greenteaLamington:
      return "녹차 래잉턴";
    case ItemType.strawberryLamington:
      return "딸기 래잉턴";
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
    case ItemType.milkteaSignature:
      return ItemType.milkteaSignature;
    case ItemType.coldbrewBottle:
      return ItemType.coldbrewBottle;
    case ItemType.oneJulieCookie:
    case ItemType.twoJulieCookie:
      return ItemType.julieCookie;
    case ItemType.walnutPie:
    case ItemType.lemonPie:
    case ItemType.chocolatePie:
      return ItemType.Pie;
    case ItemType.walnutDoubleChocolate:
    case ItemType.redvelvetSmore:
    case ItemType.darkchocolateDalgona:
    case ItemType.peanutbutterStrawberry:
    case ItemType.strawberryBanana:
      return ItemType.urbanCookie;
    case ItemType.chocolateLamington:
    case ItemType.lemonLamington:
    case ItemType.greenteaLamington:
    case ItemType.strawberryLamington:
      return ItemType.Lamington;
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
        expDate: 10,
        numPerBox: 32,
        storageType: StorageType.showCased,
      };
    case ItemType.milkteaSignature:
      return {
        expDate: 5,
        numPerBox: 1,
        storageType: StorageType.showCased,
      };
    case ItemType.coldbrewBottle:
      return {
        expDate: 14,
        numPerBox: 5,
        storageType: StorageType.showCased,
      };
    case ItemType.julieCookie:
      return {
        expDate: null,
        numPerBox: null,
        storageType: StorageType.showCased,
      };
    case ItemType.Pie:
      return {
        expDate: 5,
        numPerBox: 1,
        storageType: StorageType.refridgereted,
      };
    case ItemType.urbanCookie:
      return {
        expDate: null,
        numPerBox: 14,
        storageType: StorageType.refridgereted,
      };
    case ItemType.Lamington:
      return {
        expDate: 5,
        numPerBox: 16,
        storageType: StorageType.refridgereted,
      };
  }
}

export function getItemTypeIcon(itemType) {
  switch (getLargeItemType(itemType)) {
    case ItemType.sliceCake:
      return "🍰 ";
    case ItemType.Macaron:
      return "🪀 ";
    case ItemType.milkteaSignature:
      return "🧋 ";
    case ItemType.coldbrewBottle:
      return "🥤 ";
    case ItemType.julieCookie:
      return "🎁";
    case ItemType.Pie:
      return "🥮 ";
    case ItemType.urbanCookie:
      return "🍪 ";
    case ItemType.Lamington:
      return "🍞 ";
  }
}
