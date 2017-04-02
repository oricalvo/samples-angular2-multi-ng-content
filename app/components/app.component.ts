import {Component, ViewChild} from '@angular/core';
import {EmbeddedDialogComponent} from "./embeddedDialog.component";

@Component({
  selector: "my-app",
  moduleId: module.id,
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild("dialog") dialog: EmbeddedDialogComponent;

  constructor() {
  }

  saveChanges() {
    this.dialog.close();
  }

  close() {
    this.dialog.close();
  }

  show() {
    this.dialog.show();
  }
}
