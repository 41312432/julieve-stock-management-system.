"use strict";

import { addItemGroup } from "./item.js";
import { ItemType } from "./type.js";

const sidebarTabMenus = document.querySelectorAll(".sidebar-tab-menu");
const tabSections = document.querySelectorAll(".tab-section");

sidebarTabMenus.forEach((menu) => {
  menu.addEventListener("click", tabHandler);
});

function tabHandler(event) {
  const tabMenu = event.currentTarget;
  const tabData = tabMenu.dataset.tab;

  sidebarTabMenus.forEach((menu) => {
    menu.classList.remove("active");
  });
  tabSections.forEach((section) => {
    section.classList.remove("target");
  });

  tabMenu.classList.add("active");
  document.querySelector(`#section-${tabData}`).classList.add("target");
}

const editButtons = document.querySelectorAll(".table-fix-button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");

editButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    modal.classList.remove("hidden");
  });
});

overlay.addEventListener("click", (e) => {
  modal.classList.add("hidden");
});

addItemGroup(ItemType.carrotCake, 3);
addItemGroup(ItemType.carrotCake, 2);
addItemGroup(ItemType.creamCake, 1);
addItemGroup(ItemType.carrotCake, 3);
addItemGroup(ItemType.cheezeCake, 3);
addItemGroup(ItemType.cheezeCake, 3);

console.dir(JSON.parse(localStorage.getItem(ItemType.carrotCake)));
console.dir(JSON.parse(localStorage.getItem(ItemType.creamCake)));
console.dir(JSON.parse(localStorage.getItem(ItemType.cheezeCake)));
