import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string = "http://localhost:8000/api/auth/login";

  constructor(private _http: HttpClient, private _router: Router) { }

  login(userData) {
    return this._http.post('http://localhost:8000/api/auth/login', userData)
  }

  saveToken(token: string) {
    this.isAuthenticated.next(true);
    return sessionStorage.setItem("token", token)
  }

  getToken() {
    return sessionStorage.getItem('token')
  }

  isLoggedin() {
    return !!sessionStorage.getItem("token");

  }

  logout() {
    sessionStorage.removeItem("token");
    this._router.navigate(['/sign-in'])
  }

  isAuthenticated: Subject<boolean> = new Subject();

}
