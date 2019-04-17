import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

const BASE_URL = 'http://api.tvmaze.com';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlInterceptor implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedReq = req.clone({
      url: `${BASE_URL}/${req.url}`
    });

    return next.handle(clonedReq);
  }
}
