import {SET_DRIVERS} from './actions';
import {Driver} from '../../interfaces';
import {AnyAction} from 'redux';

const initialState: Array<Driver[]> = [];

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_DRIVERS:
      state[action.pageNumber - 1] = [...action.drivers];
      return [...state];
    default:
      return [...state];
  }
};
