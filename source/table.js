import { Editor } from "./editor.js";
import { drawItemGroupRow } from "./item.js";
import { ItemType } from "./type.js";

export class Table {
  constructor() {
    this.editor = new Editor();
    this.editButtons = document.querySelectorAll(".table-edit-button");
    this.editButtons.forEach((button) => {
      button.addEventListener("click", this.openEditor);
    });

    Object.keys(ItemType).forEach((itemType) => drawItemGroupRow(itemType));
  }

  openEditor = (event) => {
    const clickItemType = event.target.closest("tr").getAttribute("id");
    this.editor.setBasicProperties(clickItemType);
    this.editor.drawBasicProperties();
    this.editor.container.classList.remove("hidden");
  };
}
