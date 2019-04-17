import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private http: HttpClient) {
  }

  searchShow(searchTerm: string): Observable<any> {
    const observabe = this.http.get(`/search/shows?q=${searchTerm}`)

    return observabe;
  }
}
