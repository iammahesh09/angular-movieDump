import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentMsg: any = "Some quick example text to build on the card title and make up the bulk of the card's content";
  childMsg: any;

  constructor() { }

  ngOnInit() {
  }

  ParentToChild(msg) {
    this.parentMsg = msg.value;
  }

  recevieMsg($event) {
    this.childMsg = $event;
  }

}
