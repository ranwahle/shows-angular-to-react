import { Component } from '@angular/core';
import {ShowsService} from './shows.service.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private showsService: ShowsService) {

  }

  searchShow($event) {
    this.showsService.searchShow($event).subscribe(res => console.log(res))
  }
}
