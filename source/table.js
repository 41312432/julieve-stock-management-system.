import { Editor } from "./editor.js";
import { drawInventoryRow } from "./inventory.js";
import { drawItemGroupRow } from "./item.js";
import { ItemType } from "./type.js";

export class Table {
  today = new Date();

  constructor() {
    this.editor = new Editor();
    this.editButtons = document.querySelectorAll(".table-edit-button");
    this.editButtons.forEach((button) => {
      button.addEventListener("click", this.openEditor);
    });
    this.todays = document.querySelectorAll(".date");
    this.todays.forEach((today) => {
      today.innerText = `${this.today.getMonth()}월 ${this.today.getDate()}일 ${korDay(this.today.getDay())}요일`;
    });

    Object.keys(ItemType).forEach((itemType) => {
      drawItemGroupRow(itemType);
      drawInventoryRow(itemType);
    });
  }

  openEditor = (event) => {
    const clickItemType = event.target.closest("tr").getAttribute("id");
    this.editor.checkSectionType(event.target.closest(".tab-section").getAttribute("id"));
    this.editor.setBasicProperties(clickItemType);
    this.editor.drawBasicProperties();
    this.editor.container.classList.remove("hidden");
  };
}

function korDay(numDay) {
  switch (numDay) {
    case 0:
      return "일";
    case 1:
      return "월";
    case 2:
      return "화";
    case 3:
      return "수";
    case 4:
      return "목";
    case 5:
      return "금";
    case 6:
      return "토";
  }
}
