import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';


import {PeopleService} from './people.service';
import * as PeopleActionRedux from './people.actions';
import {PeopleState} from './people.state';

@Injectable()
export class PeopleEffect {

  constructor(private actions$: Actions, private customerService: PeopleService ) {}

  // 4/7
  @Effect() loadCustomers$: Observable<Action> = this.actions$.pipe(
                                                                      ofType<PeopleActionRedux.LoadPeoples>(
                                                                        PeopleActionRedux.PeopleActionTypes.LOAD_CUSTOMERS
                                                                      ),
                                                                      mergeMap((actions: PeopleActionRedux.LoadPeoples) =>
                                                                        this.customerService.getPeopleStates().pipe(
                                                                          map(
                                                                            (customersPeople: PeopleState[]) =>
                                                                              new PeopleActionRedux.LoadPeoplesSuccess(customersPeople)
                                                                          ),
                                                                          catchError(err => of(new PeopleActionRedux.LoadPeoplesFail(err)))
                                                                        )
                                                                    ));
}
