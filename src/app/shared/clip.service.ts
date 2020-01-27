import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

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

getNowPlaying(): Observable<any> {
  return this.http.get(
    `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`
  );
}
getPopular(): Observable<any> {
  return this.http.get(
    `${this.baseUrl}movie/popular?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`);
}
getTopRated(): Observable<any> {
  return this.http.get(
    `${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`);
}
getUpcoming(): Observable<any> {
  return this.http.get(
    `${this.baseUrl}movie/upcoming?api_key=${this.apiKey}&language=${this.language}&page=${this.page}&region=${this.region}`);
}

getMovie(id: string): Observable<any> {
  return this.http.get(
    `${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=${this.language}`);
}
getCredits(id: string): Observable<any> {
  return this.http.get(
    `${this.baseUrl}movie/${id}?api_key=${this.apiKey}`);
}

}
