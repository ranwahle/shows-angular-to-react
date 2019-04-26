import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  lastSearch: string;
  constructor(private http: HttpClient) {
  }

  searchShow(searchTerm: string): Observable<any> {
    this.lastSearch = searchTerm;
    const observabe = this.http.get(`/search/shows?q=${searchTerm}`)

    return observabe;
  }

  getShowById(showId: number) {
    const observable = this.http.get(`shows/${showId}`);

    return observable;
  }
}
