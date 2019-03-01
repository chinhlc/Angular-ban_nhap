import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import {UserService} from '../share-module/dependency-injection/user.service';

import * as PeopleActionRedux from '../redux/effect-redux/people.actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  data_use;
  data_people;

  constructor(
    public userService: UserService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch({ type: 'LOAD_CUSTOMERS' });
    this.store.subscribe(state => (this.data_use = state.storeReduxCustomer.user));


    this.store.dispatch(new PeopleActionRedux.LoadPeoples());
    this.store.subscribe(state => (this.data_people = state.storeReduxPeople.customers));
  }

}
