import {IPositions} from "../bikeMap/types";

export enum StationActionTypes {
    FETCH_STATIONS = 'FETCH_STATIONS'
}

export interface fetchStations {
    type: StationActionTypes.FETCH_STATIONS;
    payload: IPositions[];
}

export type StationsActions = fetchStations;