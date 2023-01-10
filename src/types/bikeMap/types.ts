export enum BikePosActionTypes {
    FETCH_BIKES_POS= 'FETCH_BIKES_POS'
}

export interface IBikePosState {
    bikesLocation: IPositions[]
}

export interface IPositions {
    lat: number,
    lon: number,
    commonName: string
}

export interface fetchBikePos {
    type: BikePosActionTypes.FETCH_BIKES_POS,
    payload: IPositions[]
}

export type BikePosActions = fetchBikePos;