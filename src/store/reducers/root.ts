import {combineReducers} from 'redux';
import {mapReducer} from "./mapReducer";
import {busArrivalReducer} from "./busArrivalReducer";
import {loginReducer} from "./loginReducer";

export const rootReducer = combineReducers({
    mapReducer,
    busArrivalReducer,
    loginReducer
});

export type RootState = ReturnType<typeof rootReducer>;