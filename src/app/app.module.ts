import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./nav/navbar.component";
import { MovieComponent} from "./movies/movie.component";
import { MovieDetailsComponent} from "./movies/movie-details.component";
import { ClipService } from "./shared/clip.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    ClipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
