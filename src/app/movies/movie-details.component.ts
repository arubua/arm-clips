import { Component, OnInit } from "@angular/core";
import {  ActivatedRoute } from "@angular/router";


import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";




@Component({
  selector: "movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})

export class MovieDetailsComponent implements OnInit {
  movie: object;
  credits: object;
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";


  constructor(private router: ActivatedRoute, private clipService: ClipService) {}

    ngOnInit() {
      const id = this.router.snapshot.paramMap.get("id");
      console.log(id);
      this.clipService.getMovie(id).subscribe((movie) => {
        console.log(movie);
        this.movie = movie;
      });
      this.clipService.getCredits(id).subscribe((credits) => {
        console.log(credits);
        this.credits = credits;
      });
    }

}
