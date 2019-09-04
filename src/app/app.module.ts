import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./views/landingpage/landingpage.component";
import { SlidesComponent } from "./views/slides/slide.component";
import { CvService } from "./shared/cv.service";

@NgModule({
  declarations: [AppComponent, LandingPageComponent, SlidesComponent],
  imports: [BrowserModule],
  providers: [CvService],
  bootstrap: [AppComponent]
})
export class AppModule {}
