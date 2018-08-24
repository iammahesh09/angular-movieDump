import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Object;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {
    this._moviesService.getMovies().subscribe(
      res => {
        this.movies = res;
      },
      error => {
        console.log(error)
      }
    )
  }

}
