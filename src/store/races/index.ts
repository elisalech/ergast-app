import { AnyAction } from 'redux';
import { Race } from '../../interfaces';
import {
  SET_RACES,
  DECREMENT_RESULTS_PAGE_NUM,
  INCREMENT_RESULTS_PAGE_NUM,
  SET_MAX_RACES,
  SET_DRIVER_ID,
} from '../../actions/actionTypes/races';

type State = {
  list: Array<Race[]>;
  maxRaces: number;
  driverId: string | null;
  pageResultsNum: number;
};

const initialState: State = {
  list: [],
  maxRaces: 1,
  pageResultsNum: 1,
  driverId: null,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_RACES:
      const newList = [...state.list];
      newList[action.pageNumber - 1] = [...action.races];
      return { ...state, list: newList };
    case DECREMENT_RESULTS_PAGE_NUM:
      return state.pageResultsNum > 1
        ? { ...state, pageResultsNum: state.pageResultsNum - 1 }
        : state;
    case INCREMENT_RESULTS_PAGE_NUM:
      return state.pageResultsNum < state.maxRaces
        ? { ...state, pageResultsNum: state.pageResultsNum + 1 }
        : state;
    case SET_MAX_RACES:
      return { ...state, maxRaces: action.max };
    case SET_DRIVER_ID:
      return { ...state, driverId: action.driverId };
    default:
      return state;
  }
};
