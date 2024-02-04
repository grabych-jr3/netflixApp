import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieCard } from '../../../Shared/Interfaces/movie';
import { MovieApiService } from '../../Services/movie-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrl: './film-card.component.scss'
})
export class FilmCardComponent implements OnInit{
  constructor(private movie: MovieApiService, private router: Router){}
  @Input() tvShows!: MovieCard[];
  @Input() imgSrc!: string;
  @Input() type!: string;
  ngOnInit(): void {
  
  }
  goToTvSeriesDetails(movieId: number){
    this.movie.setTvSeriesId(movieId);
    this.router.navigate(['tvShows', movieId]);
  }
  goToMovieDetails(id: number){
    this.movie.setMovieId(id);
    this.router.navigate(['movies', id])
  }
}
