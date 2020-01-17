import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";

@Component({
  templateUrl: "movie.component.html",
  styleUrls: ["movie.component.css"]
})

export class MovieComponent implements OnInit {
  popMovies: IMovie[];
  playingMovies: IMovie[];
  ratedMovies: IMovie[];
  upcomingMovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor(private http: HttpClient, private router: Router, private clipService: ClipService) {}

    ngOnInit() {
      this.getPopular();
      this.getPopular();
      this.getTopRated();
      this.getUpcoming();
    }

    getNowPlaying() {
      this.clipService.getNowPlaying().subscribe((res: any) => {
        console.log(res.results);
        this.playingMovies = res.results;
      });
    }

    getPopular() {
      this.clipService.getPopular().subscribe((res: any) => {
        console.log(res.results);
        this.popMovies = res.results;
      });
    }
    getTopRated() {
      this.clipService.getTopRated().subscribe((res: any) => {
        console.log(res.results);
        this.ratedMovies = res.results;
      });
    }
    getUpcoming() {
      this.clipService.getUpcoming().subscribe((res: any) => {
        console.log(res.results);
        this.upcomingMovies = res.results;
      });
    }

}
