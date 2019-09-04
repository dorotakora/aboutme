import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-landingpage",
  templateUrl: "./landingpage.component.html"
})
export class LandingPageComponent {
  constructor(private _Router: Router) {
    console.log("landingpage component");
  }

  gotoSlides() {
    console.log("gotoSlides()");
    this._Router.navigate(["slides"]);
  }
}
