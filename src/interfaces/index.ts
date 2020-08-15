import {ThunkAction} from 'redux-thunk';
import {Action} from 'redux';
import {RootState} from '../store';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<any>
>;

export interface Driver {
  driverId: string;
  code?: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}

export interface DriversResponse {
  MRData: MRDataTypeDriversResponse;
}

export interface RacesResponse {
  MRData: MRDataTypeResultsResponse;
}

interface MRDataTypeDriversResponse extends MRDataType {
  DriverTable: DriverTableType;
}

interface MRDataTypeResultsResponse extends MRDataType {
  driverId: string;
  RaceTable: RaceTableType;
}

interface MRDataType {
  xmlns: string;
  series: string;
  limit: string;
  offset: string;
  total: string;
}

type DriverTableType = {
  circuitId: string;
  constructorId: string;
  Drivers: Driver[];
};

type RaceTableType = {
  driverId: string;
  Races: Race[];
};

export interface State {
  pageConfig: {
    driversLoading: boolean;
    racesLoading: boolean;
    pageDriversNum: number;
    pageResultsNum: number;
    maxDrivers: number;
    maxRaces: number;
    driverId: string | null;
  };
  drivers: Driver[][];
  races: Race[][];
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  Results: Result[];
  date: string;
}

type Circuit = {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    locality: string;
    country: string;
  };
};

type Constructor = {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
};

export type Result = {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
};
