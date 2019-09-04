import { Component } from "@angular/core";
import { CvService } from "src/app/shared/cv.service";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html"
})
export class SlidesComponent {
  constructor(private _CvService: CvService) {
    console.log("Slides component");
    // this._CvService.test();
  }
}
