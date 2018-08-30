import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: any = "MovieDump";

  username: string = "Mahesh";

  username2: string = "Chejarla";

  username3: string = "Reddy";

  userName(name) {
    this.username3 = name
  }

  constructor() { }

  ngOnInit() {
  }

}
