import {Dispatch} from "react";
import {BikePosActions, BikePosActionTypes} from "../../types/bikeMap/types";
import axios from "axios";

export const fetchBikesPos = () => {
    return async (dispatch: Dispatch<BikePosActions>) => {
        try {
            const response = await axios.get<any>('https://api.tfl.gov.uk/bikepoint');
            dispatch({type: BikePosActionTypes.FETCH_BIKES_POS, payload: response.data})

        } catch (e) {
            console.log(e)
        }
    }
}