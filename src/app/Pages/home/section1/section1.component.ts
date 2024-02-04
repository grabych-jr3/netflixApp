import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MovieApiService } from '../../../Shared/Services/movie-api.service';
import { Router } from '@angular/router';
import { MovieCard } from '../../../Shared/Interfaces/movie';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrl: './section1.component.scss'
})
export class Section1Component implements OnInit{
  imgSrc!: string;
  arr: MovieCard[] = [];
  windowWidth!: number;
  constructor(private movie: MovieApiService, config: NgbCarouselConfig, private router: Router){
    config.interval = 30000;
    this.windowWidth = document.documentElement.clientWidth;
    if (this.windowWidth <= 690){
      console.log(true);
      
      config.showNavigationArrows = false;
    }
    config.pauseOnHover = false;
  }
  ngOnInit(): void {
    
    this.movie.trendingMovies().subscribe((result) =>{
      // console.log(result.results);
      this.arr = result.results;
      this.imgSrc = this.movie.imgPath();
    });
  }
  goToMovieDetails(id: number){
    this.movie.setMovieId(id);
    this.router.navigate(['movies', id])
  }
  goToTvSeriesDetails(id: number){
    this.movie.setTvSeriesId(id);
    this.router.navigate(['tvShows', id]);
  }
}
