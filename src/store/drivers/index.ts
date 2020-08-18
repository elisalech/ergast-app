import { AnyAction } from 'redux';

import {
  SET_DRIVERS,
  DECREMENT_DRIVERS_PAGE_NUM,
  INCREMENT_DRIVERS_PAGE_NUM,
  SET_MAX_DRIVERS,
} from '../../actions/actionTypes/drivers';
import { Driver } from '../../interfaces';

type State = {
  list: Array<Driver[]>;
  pageDriversNum: number;
  maxDrivers: number;
};

const initialState: State = { list: [], pageDriversNum: 1, maxDrivers: 1 };

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_DRIVERS:
      const newList = [...state.list];
      newList[action.pageNumber - 1] = [...action.drivers];
      return { ...state, list: newList };
    case DECREMENT_DRIVERS_PAGE_NUM:
      return state.pageDriversNum > 1
        ? { ...state, pageDriversNum: state.pageDriversNum - 1 }
        : state;
    case INCREMENT_DRIVERS_PAGE_NUM:
      return state.pageDriversNum < state.maxDrivers
        ? { ...state, pageDriversNum: state.pageDriversNum + 1 }
        : state;
    case SET_MAX_DRIVERS:
      return { ...state, maxDrivers: action.max };
    default:
      return { ...state };
  }
};
