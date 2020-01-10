import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";

import { ClipService } from "../shared/clip.service";


@Component({
  selector: "movies",
  template: `
    <div id="container" routerLink = "/movies">
      <div id="poster">
        <span id="title"></span>
        <span id="releaseDate"></span>
      </div>
    </div>
  `,
  styles: []
})

export class MovieComponent implements OnInit {
  movie: object;
  title: string;
  releaseDate: string;
  poster: string;

  constructor(private http: HttpClient, private router: Router, private clipService: ClipService) {}

    ngOnInit() {
      this.getPopular();
    }

    getPopular() {
      this.clipService.getPopular().subscribe(data => console.log(data));
    }

}
