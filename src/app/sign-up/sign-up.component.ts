import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  _user: any = {}

  regResult: boolean;
  regResultMsg: string;
  regError: boolean = false;
  constructor(private _authService: AuthService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  userReg() {
    console.log(this._user)
    this._authService.register(this._user).subscribe(
      res => {
        this.regResult = true;
        this.regError = true;
        this.regResultMsg = "Successfully registered"
        this._router.navigate(["/sign-in"]);
      },
      error => {
        this.regResult = true;
        this.regError = true;
        this.regResultMsg = "Error! Please check User details";
        console.log(error);
      }
    )
  }
  ngOnInit() {
  }

}
