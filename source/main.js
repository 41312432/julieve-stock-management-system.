"use strict";

import { Editor } from "./editor.js";
import { addItemGroupToLocalStorage, drawItemGroupFromLocalStorage, getNowStaged } from "./item.js";
import { Table } from "./table.js";
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

const table = new Table();

addItemGroupToLocalStorage(ItemType.cheezeCake, 4);

console.dir(table.editor);
console.dir(getNowStaged(ItemType.cheezeCake));
