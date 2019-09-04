import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LandingPageComponent } from "./views/landingpage/landingpage.component";
import { SlidesComponent } from "./views/slides/slides.component";

export const routes: Routes = [
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "slides",
    component: SlidesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
