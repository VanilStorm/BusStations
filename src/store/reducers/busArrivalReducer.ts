import {BusArrivalActions, BusArrivalInfoActionTypes, IBusArrivalState} from "../../types/busArrivals/types";

const initialState: IBusArrivalState = {
    busArrivalInfo: []
}

export const busArrivalReducer = (state = initialState, action: BusArrivalActions): IBusArrivalState => {
    switch (action.type) {

        case BusArrivalInfoActionTypes.FETCH_BUS_LINE: {
            return {...state, busArrivalInfo: action.payload}
        }

        default: {
            return state;
        }
    }
}