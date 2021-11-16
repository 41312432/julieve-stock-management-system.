"use strict";

import { CarrotCake } from "./item.js";

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

const carrotCakes = [new CarrotCake(3), new CarrotCake(2)];

console.log(carrotCakes);
console.log(JSON.stringify(carrotCakes));
localStorage.setItem("carrotCakes", JSON.stringify(carrotCakes));
console.dir(localStorage.getItem("carrotCakes"));
console.dir(JSON.parse(localStorage.getItem("carrotCakes")));
