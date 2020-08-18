import {
  SET_DRIVERS,
  SET_MAX_DRIVERS,
  DECREMENT_DRIVERS_PAGE_NUM,
  INCREMENT_DRIVERS_PAGE_NUM,
} from './actionTypes/drivers';
import {
  DRIVERS_LOADING_TRUE,
  DRIVERS_LOADING_FALSE,
  RACES_LOADING_TRUE,
  RACES_LOADING_FALSE,
} from './actionTypes/pageConfig';
import {
  SET_RACES,
  SET_DRIVER_ID,
  DECREMENT_RESULTS_PAGE_NUM,
  INCREMENT_RESULTS_PAGE_NUM,
  SET_MAX_RACES,
} from './actionTypes/races';
import { Race, Driver } from '../interfaces';
import {
  ERROR_TRUE,
  ERROR_FALSE,
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
} from './actionTypes/errors';

export const driversLoadingTrue = () => ({ type: DRIVERS_LOADING_TRUE });
export const driversLoadingFalse = () => ({ type: DRIVERS_LOADING_FALSE });
export const racesLoadingTrue = () => ({ type: RACES_LOADING_TRUE });
export const racesLoadingFalse = () => ({ type: RACES_LOADING_FALSE });

export const decreaseDriversPageNum = () => ({
  type: DECREMENT_DRIVERS_PAGE_NUM,
});
export const increaseDriversPageNum = () => ({
  type: INCREMENT_DRIVERS_PAGE_NUM,
});
export const decreaseResultsPageNum = () => ({
  type: DECREMENT_RESULTS_PAGE_NUM,
});
export const increaseResultsPageNum = () => ({
  type: INCREMENT_RESULTS_PAGE_NUM,
});

export const setRaces = (pageNumber: number, races: Race[]) => ({
  type: SET_RACES,
  pageNumber,
  races,
});
export const setDrivers = (pageNumber: number, drivers: Driver[]) => ({
  type: SET_DRIVERS,
  pageNumber,
  drivers,
});
export const setDriverId = (driverId: string | null) => ({
  type: SET_DRIVER_ID,
  driverId,
});

export const setMaxDrivers = (max: number) => ({
  type: SET_MAX_DRIVERS,
  max,
});
export const setMaxRaces = (max: number) => ({
  type: SET_MAX_RACES,
  max,
});

export const toggleErrorTrue = () => ({ type: ERROR_TRUE });
export const toggleErrorFalse = () => ({ type: ERROR_FALSE });
export const setErrorMessage = (message: string) => ({
  type: SET_ERROR_MESSAGE,
  message,
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
