import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer.ts";



export const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store