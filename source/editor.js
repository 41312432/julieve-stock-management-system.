"use strict";

export class Editor {
  constructor() {
    this.container = document.querySelector(".editor-container");
    this.overlay = document.querySelector(".editor-overlay");

    this.overlay.addEventListener("click", this.hideEditor);
  }

  hideEditor = () => {
    this.container.classList.add("hidden");
  };
}
