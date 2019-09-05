import { Component } from "@angular/core";
import { CvService } from "src/app/shared/cv.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html"
})
export class SlidesComponent {
  public activeslide: number = 0;

  constructor(private _CvService: CvService, private _Router: Router) {
    console.log("Slides component");
    // this._CvService.test();
  }

  gotoLandingPage() {
    console.log("gotoLandingPage()");
    this._Router.navigate([""]);
  }

  navigate(direction: number) {
    console.log("navigate()");

    if (this.activeslide >= 0 && this.activeslide <= 3) {
      this.activeslide += direction;

      // document
      //   .querySelectorAll("div[class*='slide-']")
      //   .forEach(slide => slide.classList.remove("active"));

      // document
      //   .querySelector(`.slide-${this.activeslide}`)
      //   .classList.add("active");
    }
  }
}
