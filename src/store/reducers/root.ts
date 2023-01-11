import {combineReducers} from 'redux';
import {mapReducer} from "./mapReducer";

export const rootReducer = combineReducers({
    mapReducer
});

export type RootState = ReturnType<typeof rootReducer>;