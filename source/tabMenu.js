"use strict";

export class TabMenu {
  constructor() {
    this.sidebarTabMenus = document.querySelectorAll(".sidebar-tab-menu");
    this.tabSections = document.querySelectorAll(".tab-section");

    this.sidebarTabMenus.forEach((menu) => {
      menu.addEventListener("click", this.tabHandler);
    });
  }

  tabHandler = (event) => {
    const tabMenu = event.currentTarget;
    const tabData = tabMenu.dataset.tab;

    this.sidebarTabMenus.forEach((menu) => {
      menu.classList.remove("active");
    });
    this.tabSections.forEach((section) => {
      section.classList.remove("target");
    });

    tabMenu.classList.add("active");
    document.querySelector(`#section-${tabData}`).classList.add("target");
  };
}
