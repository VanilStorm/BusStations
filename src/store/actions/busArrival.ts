import {Dispatch} from "react";
import axios from "axios";
import {BusArrivalActions, BusArrivalInfoActionTypes,} from "../../types/busArrivals/types";

export const fetchBusInfo = (num: string) => {
    return async (dispatch: Dispatch<BusArrivalActions>) => {
        try {
            dispatch({type: BusArrivalInfoActionTypes.INFO_IS_LOADING})
            const response = await axios.get(`https://api.tfl.gov.uk/Line/${num}/Arrivals`);
            dispatch({type: BusArrivalInfoActionTypes.FETCH_BUS_LINE, payload: response.data})

        } catch (e) {
            dispatch({type: BusArrivalInfoActionTypes.IS_ERROR})
        }
    }
}
