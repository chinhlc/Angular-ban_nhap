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
    case PeopleActionRedux.PeopleActionTypes.LOAD_CUSTOMERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
        customers: action.payload
      };
    }

    default: {
      return state;
    }
  }
}
