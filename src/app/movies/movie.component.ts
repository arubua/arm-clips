import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { ClipService } from "../shared/clip.service";
import { IMovie } from "../models/movie.model";
import { Observable } from "rxjs";


@Component({
  selector: "movies",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})

export class MovieComponent implements OnInit {
  movies: IMovie[];
  baseUrl = "https://image.tmdb.org/t/p/";
  posterSize: "w500";

  constructor(private http: HttpClient, private router: Router, private clipService: ClipService) {}

    ngOnInit() {
      this.getPopular();
    }

    getPopular() {
      this.clipService.getPopular().subscribe((res: any) => {
        console.log(res.results);
        this.movies = res.results;
      });
    }

}
