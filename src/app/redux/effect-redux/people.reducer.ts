import * as PeopleActionRedux from './people.actions';
import {PeopleState} from './people.state';

export interface CustomerState {
  customers: PeopleState[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export interface AppState{
  customers: CustomerState;
}

export const initialState: CustomerState = {
  customers: [],
  loading: false,
  loaded: false,
  error: ''
};

export function PeopleReducer(state = initialState, action: PeopleActionRedux.Action): CustomerState {
  switch (action.type) {
    // 3/7
    case PeopleActionRedux.PeopleActionTypes.LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true
      };
    }
    case PeopleActionRedux.PeopleActionTypes.LOAD_CUSTOMERS_FAIL: {
      return {
        ...state,
        customers: [],
        loading: false,
        loaded: false,
        error: action.payload
      };
    }
    // 7/7
    case PeopleActionRedux.PeopleActionTypes.LOAD_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: action.payload
      };
    }
    // 0/7
    default: {
      return state;
    }
  }
}
