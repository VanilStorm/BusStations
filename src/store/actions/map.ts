import {Dispatch} from "react";
import {BikePosActions, BikePosActionTypes, IPositions} from "../../types/bikeMap/types";
import axios from "axios";
import {StationActionTypes, StationsActions} from "../../types/undergroundStations/types";

export const fetchBikesPos = () => {
    return async (dispatch: Dispatch<BikePosActions>) => {
        try {
            const response = await axios.get('https://api.tfl.gov.uk/bikepoint');
            dispatch({type: BikePosActionTypes.FETCH_BIKES_POS, payload: response.data})

        } catch (e) {
            console.log(e)
        }
    }
}

export const fetchUndergroundStations = () => {
    return async (dispatch: Dispatch<StationsActions>) => {
        try {
            const response = await axios.get('https://api.tfl.gov.uk/StopPoint/Mode/tube')
            dispatch({type: StationActionTypes.FETCH_STATIONS,
                payload:response.data.stopPoints.filter((item:any) => item.stopType === 'NaptanMetroStation') })
        } catch (e) {
            console.log(e)
        }
    }
}