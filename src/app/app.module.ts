import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./nav/navbar.component";
import { MovieComponent} from "./movies/movie.component";
import { ClipService } from "./shared/clip.service";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ClipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
