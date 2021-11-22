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
  Lamington: "Lamington",
  chocolateLamington: "chocolateLamington",
  lemonLamington: "lemonLamington",
  greenteaLamington: "greenteaLamington",
  strawberryLamington: "strawberryLamington",
  //
  Chestnut: "Chestnut",
  //냉동보관
  oneScone: "oneScone",
  plainScone: "plainScone",
  cheezeScone: "cheezeScone",
  chocolateScone: "chocolateScone",
  walnutScone: "walnutScone",
  pumpkinScone: "pumpkinScone",
  mugwartScone: "mugwartScone",
  //
  twoScone: "twoScone",
  butterScone: "butterScone",
  smoreScone: "smoreScone",
  //
  Tart: "Tart",
  eggTart: "eggTart",
  appleTart: "appleTart",
  chestnutTart: "chestnutTart",
  //
  chocolateBase: "chocolateBase",
  //실온보관
  Madeleine: "Madeleine",
  plainMadeleine: "plainMadeleine",
  strawberryMadeleine: "strawberryMadeleine",
  milkteaMadeleine: "milkteaMadeleine",
  chocolateMadeleine: "chocolateMadeleine",
  //
  Tea: "Tea",
  earlgreyTea: "earlgreyTea",
  englishbreakfastTea: "englishbreakfastTea",
  ladygreyTea: "ladygreyTea",
  chamomileTea: "chamomileTea",
  peppermintTea: "peppermintTea",
  strawberrymangoTea: "strawberrymangoTea",
  dazzlingTea: "dazzlingTea",
  vanillaTea: "vanillaTea",
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
      return "초코 래밍턴";
    case ItemType.lemonLamington:
      return "레몬 래밍턴";
    case ItemType.greenteaLamington:
      return "녹차 래밍턴";
    case ItemType.strawberryLamington:
      return "딸기 래밍턴";
    case ItemType.Chestnut:
      return "초코밤";
    case ItemType.plainScone:
      return "플레인 스콘";
    case ItemType.cheezeScone:
      return "치즈 스콘";
    case ItemType.chocolateScone:
      return "초코 스콘";
    case ItemType.walnutScone:
      return "호밀호두 스콘";
    case ItemType.pumpkinScone:
      return "밤호박 스콘";
    case ItemType.mugwartScone:
      return "쑥초코 스콘";
    case ItemType.butterScone:
      return "버터플레인 스콘";
    case ItemType.smoreScone:
      return "초코스모어 스콘";
    case ItemType.eggTart:
      return "에그 타르트";
    case ItemType.appleTart:
      return "사과 타르트";
    case ItemType.chestnutTart:
      return "밤 타르트";
    case ItemType.chocolateBase:
      return "초코 베이스";
    case ItemType.plainMadeleine:
      return "플레인 마들렌";
    case ItemType.milkteaMadeleine:
      return "밀크티 마들렌";
    case ItemType.strawberryMadeleine:
      return "딸기 마들렌";
    case ItemType.chocolateMadeleine:
      return "초코 마들렌";
    case ItemType.earlgreyTea:
      return "얼그레이";
    case ItemType.englishbreakfastTea:
      return "잉글리쉬 블랙퍼스트";
    case ItemType.ladygreyTea:
      return "레이디그레이";
    case ItemType.chamomileTea:
      return "캐모마일";
    case ItemType.peppermintTea:
      return "페퍼민트";
    case ItemType.strawberrymangoTea:
      return "스트로베리&망고";
    case ItemType.dazzlingTea:
      return "다즐링";
    case ItemType.vanillaTea:
      return "바닐라";
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
    case ItemType.Chestnut:
      return ItemType.Chestnut;
    case ItemType.plainScone:
    case ItemType.cheezeScone:
    case ItemType.chocolateScone:
    case ItemType.walnutScone:
    case ItemType.pumpkinScone:
    case ItemType.mugwartScone:
      return ItemType.oneScone;
    case ItemType.butterScone:
    case ItemType.smoreScone:
      return ItemType.twoScone;
    case ItemType.eggTart:
    case ItemType.appleTart:
    case ItemType.chestnutTart:
      return ItemType.Tart;
    case ItemType.chocolateBase:
      return ItemType.chocolateBase;
    case ItemType.plainMadeleine:
    case ItemType.milkteaMadeleine:
    case ItemType.strawberryMadeleine:
    case ItemType.chocolateMadeleine:
      return ItemType.Madeleine;
    case ItemType.earlgreyTea:
    case ItemType.englishbreakfastTea:
    case ItemType.ladygreyTea:
    case ItemType.chamomileTea:
    case ItemType.peppermintTea:
    case ItemType.strawberrymangoTea:
    case ItemType.dazzlingTea:
    case ItemType.vanillaTea:
      return ItemType.Tea;
    default:
      return ItemType.sliceCake;
  }
}

export function getTypeProperty(itemType) {
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
        expDate: 90,
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
        expDate: 90,
        numPerBox: 14,
        storageType: StorageType.refridgereted,
      };
    case ItemType.Lamington:
      return {
        expDate: 5,
        numPerBox: 16,
        storageType: StorageType.refridgereted,
      };
    case ItemType.Chestnut:
      return {
        expDate: null,
        numPerBox: 16,
        storageType: StorageType.refridgereted,
      };
    case ItemType.oneScone:
      return {
        expDate: null,
        numPerBox: 16,
        storageType: StorageType.frozen,
      };
    case ItemType.twoScone:
      return {
        expDate: null,
        numPerBox: 16,
        storageType: StorageType.frozen,
      };
    case ItemType.Tart:
      return {
        expDate: null,
        numPerBox: 16,
        storageType: StorageType.frozen,
      };
    case ItemType.chocolateBase:
      return {
        expDate: 90,
        numPerBox: 20,
        StorageType: StorageType.frozen,
      };
    case ItemType.Madeleine:
      return {
        expDate: 5,
        numPerBox: 16,
        storageType: StorageType.roomTemperatured,
      };
    case ItemType.Tea:
      return {
        expDate: 90,
        numPerBox: 20,
        storageType: StorageType.roomTemperatured,
      };
  }
}

export function getIconElement(itemType) {
  const element = document.createElement("img");
  element.setAttribute("src", `./icon/${getLargeItemType(itemType)}.png`);
  return element;
}

export function getStrExpElement(itemType, amount) {
  const element = document.createElement("div");
  const boxNumber = parseInt(amount / getTypeProperty(itemType).numPerBox);
  const remainderNumber = amount % getTypeProperty(itemType).numPerBox;

  if (boxNumber == 0) {
    element.innerHTML = `
    <img src="./icon/${getLargeItemType(itemType)}.png">
    <p>x${remainderNumber}</P>
    `;
  } else if (remainderNumber == 0) {
    element.innerHTML = `
    <img src="./icon/Box.png">
    <p>x${boxNumber}</P>
    `;
  } else {
    element.innerHTML = `
    <img src="./icon/Box.png">
    <p>x${boxNumber}</P>
    <img src="./icon/${getLargeItemType(itemType)}.png">
    <p>x${remainderNumber}</P>
    `;
  }
  return element;
}
