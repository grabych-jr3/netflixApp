import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MovieApiService } from '../../../Shared/Services/movie-api.service';
import { MovieCard } from '../../../Shared/Interfaces/movie';


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrl: './section2.component.scss'
})
export class Section2Component implements OnInit{
  imgSrc!: string;
  width: number = 190;
  itemsNumber: number = 20;
  showedItems: number = 6;
  position: number = 0;
  maxPosition: number = 0;
  count: number = 1;
  @ViewChild('gallery') gallery!: ElementRef<HTMLDivElement>;

  tvShows: MovieCard[] = [];
  constructor(private movie: MovieApiService){}
  
  ngOnInit(): void {
    this.movie.ratedTv().subscribe(result => {
      // console.log(result.results);
      this.tvShows = result.results;
      this.imgSrc = this.movie.imgPath();
    })
  }
  prevListener(){
    if (this.position === 0) {
      return;
    }
    this.position += this.width * this.count;
    this.position = Math.max(this.position, this.maxPosition);
    this.gallery.nativeElement.style.marginLeft = this.position + "px";
  }
  nextListener(){
    this.position -= this.width * this.count;
    this.position = Math.max(this.position, -(this.width * (this.itemsNumber - this.showedItems)));
    this.maxPosition += this.position;
    this.gallery.nativeElement.style.marginLeft = this.position + "px";
  }
}
