import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot} from '@angular/router';

import {AppStorage} from "./global/storage";


@Injectable()
export class ActivateGlobalRouter implements CanActivate, CanActivateChild {
  constructor(
              protected storage: AppStorage,
            ){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    this.isShowHeader(state);
    return true;
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  isShowHeader(state: RouterStateSnapshot): boolean {
    if (state.url === '/login' || state.url === '/register') {
      this.storage.localStorage('BannerHas', true);
    } else {
      this.storage.localStorage('BannerHas', false);
    }
    return true;
  }
}
