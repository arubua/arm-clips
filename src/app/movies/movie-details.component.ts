import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";


import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";



@Component({
  selector: "movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})

export class MovieDetailsComponent implements OnInit {
  movies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor(private router: Router, private clipService: ClipService) {}

    ngOnInit() {

    }

    getPopular() {
      this.clipService.getPopular().subscribe((res: any) => {
        console.log(res.results);
        this.movies = res.results;
      });
    }

}
