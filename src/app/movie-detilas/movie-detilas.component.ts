import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MoviesService } from '../services/movies.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-movie-detilas',
  templateUrl: './movie-detilas.component.html',
  styleUrls: ['./movie-detilas.component.css']
})
export class MovieDetilasComponent implements OnInit {
  movie: any;

  @Input() getMovie: any;

  constructor(private _movieServices: MoviesService, private _activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params.id

    this._movieServices.getMovieDetails(id).subscribe(
      res => {
        this.movie = res;
      },
      error => console.log(error)
    )
  }

}
