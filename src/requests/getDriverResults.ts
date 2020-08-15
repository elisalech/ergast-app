import axios from 'axios';
import {AppThunk, RacesResponse} from '../interfaces';
import {SET_RACES, SET_DRIVER_ID} from '../store/races/actions';
import {
  RACES_LOADING_FALSE,
  RACES_LOADING_TRUE,
  SET_MAX_RACES,
} from '../store/pageConfig/actions';

const BY_PAGE: number = 30;

export default (pageNumber: number, driverId: string): AppThunk => async (
  dispatch,
) => {
  dispatch({type: RACES_LOADING_TRUE});
  const offset: number = BY_PAGE * pageNumber - 30;

  const res = await axios.post(
    `http://ergast.com/api/f1/drivers/${driverId}/results.json?offset=${offset}`,
  );

  try {
  } catch (e) {
    console.log(
      `
    ------- ERROR ------
    `,
      e,
    );
  }

  const racesData: RacesResponse = res.data;

  const total: number = Math.ceil(parseInt(racesData.MRData.total) / BY_PAGE);

  dispatch({type: SET_MAX_RACES, max: total});

  dispatch({
    type: SET_RACES,
    pageNumber,
    races: racesData.MRData.RaceTable.Races,
  });

  dispatch({type: RACES_LOADING_FALSE});
  dispatch({
    type: SET_DRIVER_ID,
    driverId: racesData.MRData.RaceTable.driverId || null,
  });
};
