import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {SearchShowComponent} from './search-show/search-show.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ShowsListComponent } from './shows-list/shows-list.component';
import {BaseUrlInterceptor} from './base-url-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchShowComponent,
    ShowsListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
