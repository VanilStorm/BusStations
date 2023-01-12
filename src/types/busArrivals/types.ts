export enum BusArrivalInfoActionTypes {
    FETCH_BUS_LINE = 'FETCH_BUS_LINE'
}

export interface IBusArrivalState {
    busArrivalInfo: IBusStationInfo[];
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

export type BusArrivalActions = fetchBusInfo;