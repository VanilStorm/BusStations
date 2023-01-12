import {combineReducers} from 'redux';
import {mapReducer} from "./mapReducer";
import {busArrivalReducer} from "./busArrivalReducer";

export const rootReducer = combineReducers({
    mapReducer,
    busArrivalReducer
});

export type RootState = ReturnType<typeof rootReducer>;