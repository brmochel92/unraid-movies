import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    UpcomingMoviesComponent,
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: MoviesListComponent},
      {path: 'upcoming-movies', component: UpcomingMoviesComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
