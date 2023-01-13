export enum BusArrivalInfoActionTypes {
    FETCH_BUS_LINE = 'FETCH_BUS_LINE',
    INFO_IS_LOADING = 'INFO_IS_LOADING',
    IS_ERROR = 'IS_ERROR'
}

export interface IBusArrivalState {
    busArrivalInfo: IBusStationInfo[];
    isLoading: boolean;
    error: boolean;
}

export interface IBusStationInfo {
    destinationName: string;
    timeToStation: number;
    towards: string;
    lineName: string;
}

export interface fetchBusInfo {
    type: BusArrivalInfoActionTypes.FETCH_BUS_LINE;
    payload: IBusStationInfo[]
}

export interface infoIsLoading {
    type: BusArrivalInfoActionTypes.INFO_IS_LOADING
}

export interface isError {
    type: BusArrivalInfoActionTypes.IS_ERROR
}

export type BusArrivalActions = fetchBusInfo | infoIsLoading | isError;