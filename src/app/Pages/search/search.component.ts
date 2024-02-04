import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../Shared/Services/movie-api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MovieCard } from '../../Shared/Interfaces/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit{
  filmsArr: MovieCard[] = [];
  imgSrc!: string;
  status: boolean = false;
  searchGroup: FormGroup = new FormGroup({
    searchField: new FormControl('', [Validators.required])
  })
  constructor(private movie: MovieApiService){}
  ngOnInit(): void {
    this.imgSrc =  this.movie.imgPath();
  }
  submitForm(){
    console.log(this.searchGroup.value, 'formgroup#');
    this.movie.getSearchMovie(this.searchGroup.value).subscribe(result => {
      console.log(result);
      this.filmsArr = result.results;
    })
    this.status = true;
  }
  closeFilms(){
    this.status=false;
  }
}
