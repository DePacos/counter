import {
    changeCounterActionType,
    changeInputMaximumActionType,
    changeInputStartActionType,
    CounterStateType,
    toggleErrorActionType
} from "../../types/counter.ts";
import {loadState} from "../../utils/localStorage.ts";



type ActionTypes  =
    changeInputStartActionType |
    changeInputMaximumActionType |
    toggleErrorActionType |
    changeCounterActionType

const initialState = {
    startValue:  loadState() === undefined ? '0': loadState().startValue,
    maximumValue: loadState() === undefined ? '0': loadState().maxValue,
    counterValue: loadState() === undefined ? 'enter value and press SET': loadState().startValue,
    error: false
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case "CHANGE_INPUT_START":
            return {...state, startValue: +action.value < 0 ? '0': action.value}
        case "CHANGE_INPUT_MAX":
            return {...state, maximumValue: +action.value < 0 ? '0': action.value}
        case "TOGGLE_ERROR":
            return {...state, error: action.value}
        case "CHANGE_COUNTER":
            return {...state, counterValue: action.value}
        default:
            return state
    }
};


