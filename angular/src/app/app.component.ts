import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  shows: any[];
  private searchResultsHidden: boolean;

  constructor() {

  }



  hideSearchResults() {
    this.searchResultsHidden = true;
  }
}
