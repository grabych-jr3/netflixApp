import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../Shared/Services/movie-api.service';
import { MovieCard } from '../../Shared/Interfaces/movie';


@Component({
  selector: 'app-tv-show-details',
  templateUrl: './tv-show-details.component.html',
  styleUrl: './tv-show-details.component.scss'
})
export class TvShowDetailsComponent implements OnInit {
  imgSrc?: string;
  arr!: MovieCard;
  constructor(private movie: MovieApiService) { }
  ngOnInit(): void {
    this.movie.tvShowDetails().subscribe(result => {
      // console.log(result);
      this.arr = result;
    })
    this.imgSrc = this.movie.imgPath();
  }
}
