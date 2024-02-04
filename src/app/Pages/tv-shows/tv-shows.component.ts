import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../Shared/Services/movie-api.service';
import { MovieCard } from '../../Shared/Interfaces/movie';


@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.scss'
})
export class TvShowsComponent implements OnInit{
  arr: MovieCard[] = [];
  imgSrc!: string;
  constructor(private movie: MovieApiService){}
  ngOnInit(): void {
    this.movie.tvSereiesList().subscribe(result => {
      // console.log(result.results);
      this.arr = result.results;
      this.imgSrc = this.movie.imgPath();
    })
  }
}
