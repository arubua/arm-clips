import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";

@Component({
  template: `
  <div class="container-flex" routerLink = '/now_playing' >
  <div class="gallery" *ngFor="let playingMovie of playingMovies" >
    <a routerLink="{{playingMovie?.id}}" target="" href="https://image.tmdb.org/t/p/w500{{playingMovie?.poster_path}}">
      <img src="https://image.tmdb.org/t/p/w500{{playingMovie?.poster_path}}" width="350" height="500">
    </a>
  </div>
</div>
<div class="clearfix"></div>
  `,
  styleUrls: ["movies.component.css"]
})

export class NowPlayingMovieComponent implements OnInit {
  popMovies: IMovie[];
  playingMovies: IMovie[];
  ratedMovies: IMovie[];
  upcomingMovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor(private http: HttpClient, private router: Router, private clipService: ClipService) {}

    ngOnInit() {
      this.getNowPlaying();

    }

    getNowPlaying() {
      this.clipService.getNowPlaying().subscribe((res: any) => {
        console.log(res.results);
        this.playingMovies = res.results;
      });
    }

}
