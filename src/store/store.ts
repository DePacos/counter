import { combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./reducers/counterReducer.ts";
import {loadState, saveState} from "../utils/localStorage.ts";



export const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = legacy_createStore(rootReducer, loadState('stateCounter'))

store.subscribe(()=>{
    saveState({counter: store.getState().counter}, 'stateCounter')
})
// @ts-ignore
window.store = store