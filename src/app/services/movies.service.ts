import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  movieUrl = "http://localhost:8000/api/movies/";

  getMovies(): Observable<any> {
    var hder = { 'authorization': this._authService.getToken() };
    return this._http.get(this.movieUrl, { headers: hder }).pipe(map(res => res))
  }

  getMovieDetails(id) {
    var hder = { 'authorization': this._authService.getToken() };
    return this._http.get("http://localhost:8000/api/movies/" + id, { headers: hder })
  }

}
