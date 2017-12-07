import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {

  movieDeets: any = {};

  constructor(
    private activatedThang: ActivatedRoute,
    private movieThang: CinemaService
  ) { }

  ngOnInit() {
    this.activatedThang.params.subscribe((reqParams) => {
      console.log(reqParams.id);
      // HERE!!!!!
    })
  }

}
