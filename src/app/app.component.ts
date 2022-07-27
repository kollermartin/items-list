import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'item-list';


  constructor(public spinnerService: SpinnerService) {
  }
}
