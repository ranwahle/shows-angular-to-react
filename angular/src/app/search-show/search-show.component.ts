import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-show',
  templateUrl: './search-show.component.html',
  styleUrls: ['./search-show.component.css']
})
export class SearchShowComponent implements OnInit {
  searchTerm: string;

  @Output() search = new EventEmitter<string>()

  constructor() {
  }

  ngOnInit() {
  }

  submitForm() {
    this.search.emit(this.searchTerm);
  }
}
