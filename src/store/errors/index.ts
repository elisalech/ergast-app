import { AnyAction } from 'redux';
import {
  ERROR_TRUE,
  ERROR_FALSE,
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
} from '../../actions/actionTypes/errors';

type ErrorsState = {
  isError: boolean;
  errorMessage: string | null;
};

const initialState: ErrorsState = {
  isError: false,
  errorMessage: null,
};

export default (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ERROR_TRUE:
      return { ...state, isError: true };
    case ERROR_FALSE:
      return { ...state, isError: false };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.message };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: null };
    default:
      return state;
  }
};
