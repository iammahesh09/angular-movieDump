import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  childMessage: string;

  constructor(private _sharedSrc: SharedService) { }

  ngOnInit() {
    this._sharedSrc.currentMsg.subscribe(res => this.childMessage = res)
  }
  sharedData(data) {
    this._sharedSrc.changeMsg(data.value)
  }


}
