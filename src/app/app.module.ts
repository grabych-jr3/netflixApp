import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { HeaderComponent } from './Pages/header/header.component';
import { NgbModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Section1Component } from './Pages/home/section1/section1.component';
import { Section2Component } from './Pages/home/section2/section2.component';
import { RoundPipe } from './Shared/Pipes/roundPipe';
import { MoviesComponent } from './Pages/movies/movies.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { MovieApiService } from './Shared/Services/movie-api.service';
import { TvShowsComponent } from './Pages/tv-shows/tv-shows.component';
import { TvShowDetailsComponent } from './Pages/tv-show-details/tv-show-details.component';
import { FilmCardComponent } from './Shared/Components/film-card/film-card.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { SearchComponent } from './Pages/search/search.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { CircleDecorationsComponent } from './Shared/Components/circle-decorations/circle-decorations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Section1Component,
    Section2Component,
    RoundPipe,
    MoviesComponent,
    MovieDetailsComponent,
    TvShowsComponent,
    TvShowDetailsComponent,
    FilmCardComponent,
    FooterComponent,
    SearchComponent,
    SignInComponent,
    SignUpComponent,
    CircleDecorationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [
    MovieApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
