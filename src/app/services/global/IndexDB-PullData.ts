import {Injectable} from '@angular/core';
import {Event, NavigationStart, Router} from '@angular/router';
import * as _ from 'lodash';
import {from} from 'rxjs';
import {Subject} from 'rxjs/index';
import { HttpClient } from '@angular/common/http';
import { Customer } from './DB/entities-customer';
import { DatabaseLoader } from './indexDB-Load';

@Injectable()
export class IndexDBpullData {
  public pullingChain: string[] = [];

  constructor(private router: Router,
              private databaseSuport: DatabaseLoader,
              private http: HttpClient) {
  }

  subscribeRouteChange() {
    return this.router.events.subscribe(async (event: Event) => {
      if (event instanceof NavigationStart) {
        this.checkPullData(event.url);
      }
    });
  }

  checkPullData(routerUrl: string) {
    let entityPull = [];
    switch (routerUrl) {
      case '/store/list':
        entityPull = ['customer'];
        break;
    }
    // TODO thieu filter unique entity khi pull
    this.pullingChain.push(...entityPull);
    this.resolvePullDataManager();
  }


  resolvePullDataManager() {
    if (this.pullingChain.length > 0) {
      _.forEach(this.pullingChain, (entityCode: string) => {
        console.log(entityCode);
        this.http.get('http://localhost:4500/json-people').subscribe(async (data) => {
          console.log(data);
          if (data && data[0].length > 0) {
            data[0].forEach((item) => {
              console.log(item);
              this.databaseSuport.addData(Customer.getCode(), item);
            });
          }
        });
      });
    }
  }
}
