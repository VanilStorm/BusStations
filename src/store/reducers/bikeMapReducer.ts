import {BikePosActions, BikePosActionTypes, IBikePosState} from "../../types/bikeMap/types";

const initialState: IBikePosState = {
    bikesLocation: []
}

export const bikeMapReducer = (state = initialState, action: BikePosActions): IBikePosState => {
    switch (action.type) {
        case BikePosActionTypes.FETCH_BIKES_POS: {
            return {...state, bikesLocation: action.payload}
        }

        default: {
            return state;
        }
    }
}