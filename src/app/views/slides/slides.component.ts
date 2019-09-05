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

  constructor(private _CvService: CvService, private _Router: Router) {
    console.log("Slides component");
    // this._CvService.test();
  }

  gotoLandingPage() {
    console.log("gotoLandingPage()");
    this._Router.navigate([""]);
  }

  navigate(slide: number, direction: string) {
    console.log("navigate()");

    // if (slide > 0) {
    //   this.direction = "next";
    // } else {
    //   this.direction = "previous";
    // }

    this.direction = direction;

    if (this.activeslide >= 0 && this.activeslide <= 3) {
      this.activeslide += slide;

      // document
      //   .querySelectorAll("div[class*='slide-']")
      //   .forEach(slide => slide.classList.remove("active"));

      // document
      //   .querySelector(`.slide-${this.activeslide}`)
      //   .classList.add("active");

      // console.log(document.querySelectorAll("div[class*='slide-']"));

      // document
      //   .querySelectorAll("div[class*='slide-']")
      //   [this.activeslide].classList.add("slide-in");

      // console.log(
      //   Array.from(document.querySelectorAll("div[class*='slide-']"))
      // );

      // document.querySelector(".slides").classList.add("slide-in");
      // Array.from(document.querySelectorAll(".slides"))[2].classList.add(
      //   "qwwerty"
      // );
      Array.from(document.querySelectorAll(".slides")).forEach(slide =>
        slide.classList.remove("slide-in-left")
      );
      Array.from(document.querySelectorAll(".slides")).forEach(slide =>
        slide.classList.remove("slide-in-right")
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
