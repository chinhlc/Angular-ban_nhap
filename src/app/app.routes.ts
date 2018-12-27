import {Routes} from '@angular/router';
import {PageNotFound} from './pages/404';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFound}
];
