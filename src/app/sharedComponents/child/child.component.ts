import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childMsg: any = "Some quick example text to build on the card title and make up the bulk of the card's content";

  @Input() childMessage: any;

  @Output() msgEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ChildToParent(msg) {
    this.msgEvent.emit(msg.value)
  }

}
