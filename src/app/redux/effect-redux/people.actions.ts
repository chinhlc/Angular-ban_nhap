import { Action } from '@ngrx/store';

import {PeopleState} from './people.state';

export enum PeopleActionTypes {
  LOAD_CUSTOMERS = '[People] Load Peoples',
  LOAD_CUSTOMERS_FAIL = '[People] Load Peoples Fail',
  LOAD_CUSTOMERS_SUCCESS = '[People] Load Peoples Success'
}

// 2/7
export class LoadPeoples implements Action {
  readonly type = PeopleActionTypes.LOAD_CUSTOMERS;
}


export class LoadPeoplesFail implements Action {
  readonly type = PeopleActionTypes.LOAD_CUSTOMERS_FAIL;
  constructor(public payload: string) {}
}

// 6/7
export class LoadPeoplesSuccess implements Action {
  readonly type = PeopleActionTypes.LOAD_CUSTOMERS_SUCCESS;
  constructor(public payload: PeopleState[]) {}
}

export type Action = LoadPeoples | LoadPeoplesFail | LoadPeoplesSuccess;
