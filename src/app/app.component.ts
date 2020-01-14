import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class AppComponent {
  title = "arm-clips";
}
