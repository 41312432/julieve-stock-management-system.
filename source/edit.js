"use strict";

export class Edit {
  constructor() {
    this.buttons = document.querySelectorAll(".table-edit-button");
    this.edit = document.querySelector(".edit");
    this.overlay = document.querySelector(".edit-overlay");

    this.buttons.forEach((button) => {
      button.addEventListener("click", this.openEditor);
    });
    this.overlay.addEventListener("click", this.hideEditor);
  }

  openEditor = () => {
    this.edit.classList.remove("hidden");
  };
  hideEditor = () => {
    this.edit.classList.add("hidden");
  };
}
