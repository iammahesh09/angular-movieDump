import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  _user: any = {}

  loginResult: boolean;
  loginResultMsg: string;
  loginError: boolean = false;
  returnUrl: any;
  constructor(private _authService: AuthService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  userLogin() {
    this._authService.login(this._user).subscribe(
      res => {
        this.loginResult = true;
        this.loginError = true;
        this.loginResultMsg = "Successfully login"
        this._authService.saveToken(res["token"])
        //this._router.navigate(["/"]);
        // login successful so redirect to return url
        this._router.navigateByUrl(this.returnUrl);
      },
      error => {
        this.loginResult = true;
        this.loginError = true;
        this.loginResultMsg = "Error! Please check username and password details";
        this._router.navigate(['/sign-in']);
        console.log(error);
      }
    )
  }

  ngOnInit() {
    // reset login status
    this._authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this._activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }
}
