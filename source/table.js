import { Editor } from "./editor.js";

export class Table {
  constructor() {
    this.editor = new Editor();
    this.editButtons = document.querySelectorAll(".table-edit-button");
    this.editButtons.forEach((button) => {
      button.addEventListener("click", this.openEditor);
    });
  }

  openEditor = (event) => {
    const clickItemType = event.target.closest("tr").getAttribute("id");
    console.log("clickItemType", clickItemType);
    this.editor.setBasicProperties(clickItemType);
    this.editor.drawBasicProperties();
    this.editor.container.classList.remove("hidden");
  };
}
