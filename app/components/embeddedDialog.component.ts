import {Component, HostBinding} from '@angular/core';
@Component({
  selector: "my-embedded-dialog",
  moduleId: module.id,
  templateUrl: "./embeddedDialog.component.html",
  styleUrls: ["./embeddedDialog.component.css"]
})
export class EmbeddedDialogComponent {
  visible: boolean;

  constructor() {
    this.visible = false;
  }

  @HostBinding("style.display") get display() {
    return this.visible ? "flex" : "none";
  }

  show() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }
}
