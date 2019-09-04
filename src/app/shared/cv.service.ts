import { Injectable } from "@angular/core";

@Injectable()
export class CvService {
  constructor() {
    console.log("cv service");
  }

  test() {
    console.log("CvService test");
  }
}
