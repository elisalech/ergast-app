import {
  DRIVERS_LOADING_FALSE,
  DRIVERS_LOADING_TRUE,
  RACES_LOADING_FALSE,
  RACES_LOADING_TRUE,
  DECREMENT_DRIVERS_PAGE_NUM,
  INCREMENT_DRIVERS_PAGE_NUM,
  DECREMENT_RESULTS_PAGE_NUM,
  INCREMENT_RESULTS_PAGE_NUM,
  SET_MAX_DRIVERS,
  SET_MAX_RACES,
  SET_DRIVER_ID,
} from './actions';
import {AnyAction} from 'redux';

type PageConfig = {
  driversLoading: boolean;
  racesLoading: boolean;
  pageDriversNum: number;
  pageResultsNum: number;
  maxDrivers: number;
  maxRaces: number;
  driverId: string | null;
};

const initialState: PageConfig = {
  driversLoading: false,
  racesLoading: false,
  pageDriversNum: 1,
  pageResultsNum: 1,
  maxDrivers: 29,
  maxRaces: 27,
  driverId: null,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case DRIVERS_LOADING_FALSE:
      return {...state, driversLoading: false};
    case DRIVERS_LOADING_TRUE:
      return {...state, driversLoading: true};
    case RACES_LOADING_FALSE:
      return {...state, racesLoading: false};
    case RACES_LOADING_TRUE:
      return {...state, racesLoading: true};
    case DECREMENT_DRIVERS_PAGE_NUM:
      return state.pageDriversNum > 1
        ? {...state, pageDriversNum: state.pageDriversNum - 1}
        : state;
    case INCREMENT_DRIVERS_PAGE_NUM:
      return state.pageDriversNum < state.maxDrivers
        ? {...state, pageDriversNum: state.pageDriversNum + 1}
        : state;
    case DECREMENT_RESULTS_PAGE_NUM:
      return state.pageResultsNum > 1
        ? {...state, pageResultsNum: state.pageResultsNum - 1}
        : state;
    case INCREMENT_RESULTS_PAGE_NUM:
      return state.pageResultsNum < state.maxRaces
        ? {...state, pageResultsNum: state.pageResultsNum + 1}
        : state;
    case SET_MAX_RACES:
      return {...state, maxRaces: action.max};
    case SET_MAX_DRIVERS:
      return {...state, maxDrivers: action.max};
    case SET_DRIVER_ID:
      return {...state, driverId: action.driverId};
    default:
      return state;
  }
};
