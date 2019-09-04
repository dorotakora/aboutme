import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./views/landingpage/landingpage.component";
import { SlidesComponent } from "./views/slides/slides.component";
import { CvService } from "./shared/cv.service";
import { AppRoutingModule } from "./app.routing";

@NgModule({
  declarations: [AppComponent, LandingPageComponent, SlidesComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule {}
