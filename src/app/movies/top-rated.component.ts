import { Component, OnInit } from "@angular/core";

import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";

@Component({
  template: `
  <div class="container-flex" routerLink = '/top_rated' >
  <div class="gallery" *ngFor="let ratedMovie of ratedMovies" >
    <a routerLink="{{ratedMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{ratedMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{ratedMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
  styleUrls: ["movies.component.css"]
})

export class TopRatedMovieComponent implements OnInit {
  ratedMovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor( private clipService: ClipService) {}

    ngOnInit() {
      this.getTopRated();
    }

    getTopRated() {
      this.clipService.getTopRated().subscribe((res: any) => {
        console.log(res.results);
        this.ratedMovies = res.results;
      });
    }


}
