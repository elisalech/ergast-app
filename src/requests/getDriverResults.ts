import axios from 'axios';
import { AppThunk, RacesResponse } from '../interfaces';

import {
  racesLoadingTrue,
  racesLoadingFalse,
  setMaxRaces,
  setRaces,
  setDriverId,
  toggleErrorTrue,
  setErrorMessage,
} from '../actions';

const BY_PAGE: number = 30;

export default (pageNumber: number, driverId: string): AppThunk => async (
  dispatch,
) => {
  dispatch(racesLoadingTrue());
  const offset: number = BY_PAGE * pageNumber - 30;

  try {
    const res = await axios.post(
      `http://ergast.com/api/f1/drivers/${driverId}/results.json?offset=${offset}`,
    );

    const racesData: RacesResponse = res.data;

    const maxCountPage: number = Math.ceil(
      parseInt(racesData.MRData.total) / BY_PAGE,
    );

    dispatch(setMaxRaces(maxCountPage));

    dispatch(setRaces(pageNumber, racesData.MRData.RaceTable.Races));

    dispatch(setDriverId(racesData.MRData.RaceTable.driverId || null));
  } catch (e) {
    dispatch(toggleErrorTrue());
    dispatch(setErrorMessage(e.message));
  }

  dispatch(racesLoadingFalse());
};
