import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { MoviesComponent } from './Pages/movies/movies.component';
import { MovieDetailsComponent } from './Pages/movie-details/movie-details.component';
import { TvShowsComponent } from './Pages/tv-shows/tv-shows.component';
import { TvShowDetailsComponent } from './Pages/tv-show-details/tv-show-details.component';
import { SearchComponent } from './Pages/search/search.component';
import { SignInComponent } from './Pages/sign-in/sign-in.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "movies", component: MoviesComponent},
  {path: "movies/:id", component: MovieDetailsComponent},
  {path: "tvShows", component: TvShowsComponent},
  {path: "tvShows/:id", component: TvShowDetailsComponent},
  {path: "search", component: SearchComponent},
  {path: "signIn", component: SignInComponent},
  {path: "signUp", component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
