import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";

import { NowPlayingMovieComponent } from "./now-playing.component";
import { PopularMovieComponent } from "./popular.component";
import { TopRatedMovieComponent } from "./top-rated.component";
import { UpcomingMovieComponent } from "./upcoming.component";
import { MovieDetailsComponent } from "./movie-details.component";
import { SafePipe } from "../shared/safe.pipe";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {path: "now_playing", component: NowPlayingMovieComponent},
      {path: "popular", component: PopularMovieComponent},
      {path: "top_rated", component: TopRatedMovieComponent},
      {path: "upcoming", component: UpcomingMovieComponent},
      {path: "now_playing/:id", component: MovieDetailsComponent},
      {path: "popular/:id", component: MovieDetailsComponent},
      {path: "top_rated/:id", component: MovieDetailsComponent},
      {path: "upcoming/:id", component: MovieDetailsComponent},
      {path: "", redirectTo: "home", pathMatch: "full"},
      {path: "**", redirectTo: "home", pathMatch: "full"}
    ]),
    MatTabsModule,
    MatIconModule,
    MatCardModule
  ],
  declarations: [
    NowPlayingMovieComponent,
    PopularMovieComponent,
    TopRatedMovieComponent,
    UpcomingMovieComponent,
    MovieDetailsComponent,
    SafePipe
  ]
})

export class MoviesModule {}
