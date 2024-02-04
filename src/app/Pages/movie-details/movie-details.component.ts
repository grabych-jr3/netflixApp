import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../Shared/Services/movie-api.service';
import { MovieCard } from '../../Shared/Interfaces/movie';



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss'
})
export class MovieDetailsComponent implements OnInit{
  imgSrc?: string;
  arr!: MovieCard;
  constructor(private movie: MovieApiService) { }
  ngOnInit(): void {
    this.movie.movieDetails().subscribe(result => {
      // console.log(result);
      this.arr = result;
      this.imgSrc = this.movie.imgUrl;
    })
  }

}
