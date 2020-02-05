import {combineReducers, createStore} from "redux";
import reducer from './students/reducer';

const rootReducer = combineReducers({
    student: reducer
});

export const store = createStore(rootReducer);