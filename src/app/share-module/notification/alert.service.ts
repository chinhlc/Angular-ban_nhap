import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import {IToast} from './models/alert.interface';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private subject = new Subject<IToast>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear toast messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear toast messages
          this.clear();
        }
      }
    });
  }


  getToast(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message, keepAfterRouteChange = true): void {
    this.toast(message, keepAfterRouteChange);
  }

  error(message, keepAfterRouteChange = true): void {
    this.toast(message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange = true): void {
    this.toast(message, keepAfterRouteChange);
  }

  warn(message: string, keepAfterRouteChange = true): void {
    this.toast(message, keepAfterRouteChange);
  }

  toast(message: string, keepAfterRouteChange = true): void {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next(<IToast>{ message: message });
  }

  clear() {
    this.subject.next();
  }
}
