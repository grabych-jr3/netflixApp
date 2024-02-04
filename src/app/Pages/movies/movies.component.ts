import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../Shared/Services/movie-api.service';
import { MovieCard } from '../../Shared/Interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{
  arr: MovieCard[] = [];
  imgSrc!: string;
  constructor(private movie: MovieApiService){}
  ngOnInit(): void {
    this.movie.movieList().subscribe(result => {
      // console.log(result.results);
      this.arr = result.results;
      this.imgSrc = this.movie.imgPath();
    })
  }

}
