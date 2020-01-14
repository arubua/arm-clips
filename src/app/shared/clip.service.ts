import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

import { IMovie } from "../models/movie.model";



@Injectable()

export class ClipService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;
  page: number;

constructor( private http: HttpClient) {
  this.baseUrl = "https://api.themoviedb.org/3/";
  this.apiKey = "566ddfa3dcc475f0aaff81a58fe7038b";
  this.language = "en-US";
  this.page = 1;
  this.region = "US";
}


getPopular(): Observable<any> {
  return this.http.get(
    `${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`)
}



}
