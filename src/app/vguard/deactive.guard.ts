import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import {BlogCreateComponent} from '../article/blog-create/blog-create.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<BlogCreateComponent> {
  constructor() {
    console.log("have Deactivate");
  }

  canDeactivate(component: BlogCreateComponent) {
    if(!component.FormCheckVal()){
      return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
  // https://v6.angular.io/api/router/CanDeactivate
}
