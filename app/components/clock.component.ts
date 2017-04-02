import {Component, ElementRef} from '@angular/core';
@Component({
  selector: "my-clock",
  moduleId: module.id,
  templateUrl: "./clock.component.html",
  styleUrls: ["./clock.component.css"]
})
export class ClockComponent {
  time: Date;

  constructor(private element: ElementRef) {
    console.log("ctor");
  }

  ngOnInit() {
    console.log("ngOnInit");

    this.time = new Date();

    setInterval(()=> {
      console.log("tick", this.element.nativeElement);

      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
