import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CinemaService } from './services/cinema.service';
import { MyMovieComponentComponent } from './my-movie-component/my-movie-component.component';
import { MyHomeComponentComponent } from './my-home-component/my-home-component.component';
import { RouterModule, Routes } from '@angular/router';

const myRoutes: Routes = [
  { path:'', component: MyHomeComponentComponent },
  { path:'movie/:id', component: MyMovieComponentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyMovieComponentComponent,
    MyHomeComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [ CinemaService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
