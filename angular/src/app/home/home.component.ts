import { Component, OnInit } from '@angular/core';
import {ShowsService} from '../shows.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'app';

  shows: any[];
  searchTerm: string;
  private searchResultsHidden: boolean;

  constructor(private showsService: ShowsService) {

  }

  ngOnInit() {
    this.searchTerm = this.showsService.lastSearch || '';
    document.title = 'Search show';
    if (this.searchTerm) {
      this.searchShow(this.searchTerm);
    }
  }

  searchShow($event) {
    document.title = `Search for ${$event}`;
    this.showsService.searchShow($event).subscribe(res => {
      this.shows = res.map(show => show.show);
      this.searchResultsHidden = false;
    })
  }

  hideSearchResults() {
    this.searchResultsHidden = true;
  }
}
