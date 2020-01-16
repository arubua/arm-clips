import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { MovieComponent } from "./movie.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: "popular", component: MovieComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "**", redirectTo: "home", pathMatch: "full"}
    ])
  ],
  declarations: [
    MovieComponent
  ]
})

export class MoviesModule {}
