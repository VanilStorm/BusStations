export enum BusArrivalInfoActionTypes {
    FETCH_BUS_LINE = 'FETCH_BUS_LINE',
    INFO_IS_LOADING = 'INFO_IS_LOADING'
}

export interface IBusArrivalState {
    busArrivalInfo: IBusStationInfo[];
    isLoading: boolean;
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

export type BusArrivalActions = fetchBusInfo | infoIsLoading;