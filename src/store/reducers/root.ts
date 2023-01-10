import {combineReducers} from 'redux';
import {bikeMapReducer} from "./bikeMapReducer";

export const rootReducer = combineReducers({
    bikeMapReducer
});

export type RootState = ReturnType<typeof rootReducer>;