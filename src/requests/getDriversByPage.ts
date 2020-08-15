import axios from 'axios';
import {DriversResponse, AppThunk} from '../interfaces';
import {SET_DRIVERS} from '../store/drivers/actions';
import {
  DRIVERS_LOADING_TRUE,
  DRIVERS_LOADING_FALSE,
  SET_MAX_DRIVERS,
} from '../store/pageConfig/actions';

const BY_PAGE: number = 30;

export default (pageNumber: number): AppThunk => async (dispatch) => {
  dispatch({type: DRIVERS_LOADING_TRUE});
  const offset: number = BY_PAGE * pageNumber - 30;

  const res = await axios.post(
    `http://ergast.com/api/f1/drivers.json?offset=${offset}`,
  );

  const driversData: DriversResponse = res.data;

  const total: number = Math.ceil(parseInt(driversData.MRData.total) / BY_PAGE);

  dispatch({type: SET_MAX_DRIVERS, max: total});

  dispatch({
    type: SET_DRIVERS,
    pageNumber,
    drivers: driversData.MRData.DriverTable.Drivers,
  });

  dispatch({type: DRIVERS_LOADING_FALSE});
};
