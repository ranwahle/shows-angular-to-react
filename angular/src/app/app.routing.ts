import {SingleShowComponent} from './single-show/single-show.component';
import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'

export const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'show/:id',
    component: SingleShowComponent
  }
]
