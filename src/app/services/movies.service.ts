import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  movieUrl = "http://localhost:8000/api/movies/";

  getMovies() {
    var hder = { 'authorization': this._authService.getToken() };
    return this._http.get(this.movieUrl, { headers: hder })
  }


}
