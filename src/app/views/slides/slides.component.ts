import { Component } from "@angular/core";
import { CvService } from "src/app/shared/cv.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-slides",
  templateUrl: "./slides.component.html"
})
export class SlidesComponent {
  public activeslide: number = 0;
  public direction: string;
  public condition: string;

  constructor(private _CvService: CvService, private _Router: Router) {}

  gotoLandingPage() {
    this._Router.navigate([""]);
  }

  navigate(slide: number, direction: string) {
    this.direction = direction;

    if (this.activeslide >= 0 && this.activeslide <= 3) {
      this.activeslide += slide;

      Array.from(document.querySelectorAll(".slides")).forEach(slide =>
        slide.classList.remove(
          "slide-in-right",
          "slide-out-right",
          "slide-in-left",
          "slide-out-left"
        )
      );

      if (this.direction === "next") {
        Array.from(document.querySelectorAll(".slides"))[
          this.activeslide
        ].classList.add("slide-in-right");
      } else if (this.direction === "previous") {
        Array.from(document.querySelectorAll(".slides"))[
          this.activeslide
        ].classList.add("slide-in-left");
      }
    }
  }
}
