import {BikePosActionTypes, IBikePosState} from "../../types/bikeMap/types";
import {StationActionTypes} from "../../types/undergroundStations/types";
import {MapReducerActions} from "../../types/common";

const initialState: IBikePosState = {
    bikesLocation: [],
    undergroundStations: []
}

export const mapReducer = (state = initialState, action: MapReducerActions): IBikePosState => {
    switch (action.type) {
        case BikePosActionTypes.FETCH_BIKES_POS: {
            return {...state, bikesLocation: action.payload}
        }

        case StationActionTypes.FETCH_STATIONS: {
            return {...state, undergroundStations: action.payload}
        }

        default: {
            return state;
        }
    }
}