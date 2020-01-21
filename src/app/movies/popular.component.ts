import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";

@Component({
  template: `
  <div class="container-fluid" routerLink = '/popular'>
  <div class="gallery" *ngFor="let popMovie of popMovies" >
    <a routerLink="{{popMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{popMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{popMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
  styleUrls: ["./movies.component.css"]
})

export class PopularMovieComponent implements OnInit {
  popMovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor( private router: Router, private clipService: ClipService) {}

    ngOnInit() {
      this.getPopular();
    }


    getPopular() {
      this.clipService.getPopular().subscribe((res: any) => {
        console.log(res.results);
        this.popMovies = res.results;
      });
    }

}
