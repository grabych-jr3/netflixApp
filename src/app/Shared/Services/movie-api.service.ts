import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }
  baseUrl = "https://api.themoviedb.org/3";
  apiKey = "ff41a64e942b89b6c08b7c9f52a7c642";
  imgUrl = "https://image.tmdb.org/t/p/original";
  setTvSeriesId(id: number) {
    localStorage.setItem("savedTvSeriesId", id.toString());
  }
  setMovieId(id: number) {
    localStorage.setItem("savedMovieId", id.toString());
  }

  imgPath(): string {
    return this.imgUrl;
  }
  trendingMovies(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/all/day?api_key=${this.apiKey}`);
  }
  ratedTv(): Observable<any> {
    return this.http.get(`${this.baseUrl}/trending/tv/day?api_key=${this.apiKey}`)
  }
  tvShowDetails(): Observable<any> {
    const id = localStorage.getItem("savedTvSeriesId")
    if (id) {
      return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`);
    } else {
      return EMPTY;
    }
  }
  movieDetails(): Observable<any> {
    const id = localStorage.getItem("savedMovieId");
    if (id) {
      return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
    } else {
      return EMPTY;
    }
  }
  movieList(): Observable<any> {
      return this.http.get(`${this.baseUrl}/discover/movie?api_key=${this.apiKey}`)
  }
  tvSereiesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/discover/tv?api_key=${this.apiKey}`)
  }
  getSearchMovie(data: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${data.searchField}`);
  }
}
