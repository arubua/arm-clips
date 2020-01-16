import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import {ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";

@Component({
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"]
})

export class DashboardComponent implements OnInit {
  popmovies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor(private clipService: ClipService) {}

  ngOnInit() {
    this.getPopular();
  }
  getPopular() {
    this.clipService.getPopular().subscribe((res: any) => {
      console.log(res.results);
      this.popmovies = res.results.slice(0, 4);
      console.log(this.popmovies);
    });
  }
}
