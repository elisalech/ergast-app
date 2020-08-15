import {SET_RACES} from './actions';
import {Race} from '../../interfaces';
import {AnyAction} from 'redux';

const initialState: Array<Race[]> = [];

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_RACES:
      state[action.pageNumber - 1] = [...action.races];
      return [...state];
    default:
      return state;
  }
};
