import { Component, OnInit } from "@angular/core";

import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";

@Component({
  template: `
  <div class="container-flex" routerLink = '/upcoming' >
  <div class="gallery" *ngFor="let upcomingMovie of upcomingMovies" >
    <a routerLink="{{upcomingMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{upcomingMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{upcomingMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
  styleUrls: ["movies.component.css"]
})

export class UpcomingMovieComponent implements OnInit {
  upcomingMovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor( private clipService: ClipService) {}

    ngOnInit() {
      this.getUpcoming();
    }

    getUpcoming() {
      this.clipService.getUpcoming().subscribe((res: any) => {
        console.log(res.results);
        this.upcomingMovies = res.results;
      });
    }


}
