import { AnyAction } from 'redux';
import {
  DRIVERS_LOADING_FALSE,
  DRIVERS_LOADING_TRUE,
  RACES_LOADING_FALSE,
  RACES_LOADING_TRUE,
} from '../../actions/actionTypes/pageConfig';

type PageConfig = {
  driversLoading: boolean;
  racesLoading: boolean;
};

const initialState: PageConfig = {
  driversLoading: false,
  racesLoading: false,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case DRIVERS_LOADING_FALSE:
      return { ...state, driversLoading: false };
    case DRIVERS_LOADING_TRUE:
      return { ...state, driversLoading: true };
    case RACES_LOADING_FALSE:
      return { ...state, racesLoading: false };
    case RACES_LOADING_TRUE:
      return { ...state, racesLoading: true };
    default:
      return state;
  }
};
