import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";

@Component({
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
  playingMovies: IMovie[];
  popMovies: IMovie[];
  ratedMovies: IMovie[];
  upcomingMovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor(private clipService: ClipService) {}

  ngOnInit() {
    this.getNowPlaying();
    this.getPopular();
    this.getTopRated();
    this.getUpcoming();
  }

  getNowPlaying() {
    this.clipService.getNowPlaying().subscribe((res: any) => {
      console.log(res.results);
      this.playingMovies = res.results.slice(0, 4);
      console.log(this.playingMovies);
    });
  }
  getPopular() {
    this.clipService.getPopular().subscribe((res: any) => {
      console.log(res.results);
      this.popMovies = res.results.slice(0, 4);
      console.log(this.popMovies);
    });
  }
  getTopRated() {
    this.clipService.getTopRated().subscribe((res: any) => {
      console.log(res.results);
      this.ratedMovies = res.results.slice(0, 4);
      console.log(this.ratedMovies);
    });
  }
  getUpcoming() {
    this.clipService.getUpcoming().subscribe((res: any) => {
      console.log(res.results);
      this.upcomingMovies = res.results.slice(0, 4);
      console.log(this.upcomingMovies);
    });
  }
}
