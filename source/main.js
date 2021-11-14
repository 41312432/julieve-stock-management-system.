"use strict";

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
