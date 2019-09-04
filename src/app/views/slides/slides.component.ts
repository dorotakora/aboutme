import { Component } from "@angular/core";
import { CvService } from "src/app/shared/cv.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html"
})
export class SlidesComponent {
  constructor(private _CvService: CvService, private _Router: Router) {
    console.log("Slides component");
    // this._CvService.test();
  }

  gotoLandingPage() {
    console.log("gotoLandingPage()");
    this._Router.navigate([""]);
  }
}
