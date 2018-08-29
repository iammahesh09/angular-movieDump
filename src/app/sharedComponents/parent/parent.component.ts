import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentMessage: any;

  constructor(private _sharedSrc: SharedService) { }

  ngOnInit() {
    this._sharedSrc.currentMsg.subscribe(res => this.parentMessage = res)
  }

  sharedData(data) {
    this._sharedSrc.changeMsg(data.value)
  }


}
