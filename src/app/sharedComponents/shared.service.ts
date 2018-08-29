import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private messageSource = new BehaviorSubject<any>("Default Meassage");

  currentMsg = this.messageSource.asObservable();

  changeMsg(msg) {
    this.messageSource.next(msg)
  }

  constructor() { }
}
