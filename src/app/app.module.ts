import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {MatCardModule} from "@angular/material/card";

import { MoviesModule } from "./movies/movie.module";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./nav/navbar.component";

import { DashboardComponent} from "./home/dashboard.component";
import { ClipService } from "./shared/clip.service";
import { RouterModule } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: "home", component: DashboardComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path:  "**", redirectTo: "home", pathMatch: "full"}
    ]),
    FontAwesomeModule,
    MoviesModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [
    ClipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
