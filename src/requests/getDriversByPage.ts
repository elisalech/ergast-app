import axios from 'axios';
import { DriversResponse, AppThunk } from '../interfaces';

import {
  driversLoadingTrue,
  driversLoadingFalse,
  setDrivers,
  setMaxDrivers,
  toggleErrorTrue,
  setErrorMessage,
} from '../actions';

const BY_PAGE: number = 30;

export default (pageNumber: number): AppThunk => async (dispatch) => {
  dispatch(driversLoadingTrue());
  const offset: number = BY_PAGE * pageNumber - 30;

  try {
    const res = await axios.post(
      `http://ergast.co/api/f1/drivers.json?offset=${offset}`,
    );

    const driversData: DriversResponse = res.data;

    const maxCountPage: number = Math.ceil(
      parseInt(driversData.MRData.total) / BY_PAGE,
    );

    dispatch(setMaxDrivers(maxCountPage));

    dispatch(setDrivers(pageNumber, driversData.MRData.DriverTable.Drivers));
  } catch (e) {
    dispatch(toggleErrorTrue());
    dispatch(setErrorMessage(e.message));
  }

  dispatch(driversLoadingFalse());
};
