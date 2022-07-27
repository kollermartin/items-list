import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

 public _loading: BehaviorSubject<boolean>;

  constructor() {
    this._loading = new BehaviorSubject<boolean>(false);
  }

  show() {
    this._loading.next(true);
  }

  hide() {
    this._loading.next(false);
  }
}
