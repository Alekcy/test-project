import {combineReducers, createStore} from "redux";
import reducer from './students/reducer';

const rootReducer = combineReducers({
    student: reducer
});

export type StoreType = ReturnType<typeof rootReducer>;

export const store: StoreType = createStore(rootReducer);