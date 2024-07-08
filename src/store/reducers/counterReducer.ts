import {
    ChangeCounterActionType,
    ChangeInputMaximumActionType,
    ChangeInputStartActionType,
    CounterStateType,
    ToggleErrorActionType
} from "../../types/counter.ts";

const initialState = {
    startValue:  '0',
    maximumValue: '1',
    counterValue: 'enter value and press SET',
    error: false
}

export const counterReducer = (state: CounterStateType = initialState, action: ActionTypes):CounterStateType => {
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
}


type ActionTypes  =
    ChangeInputStartActionType |
    ChangeInputMaximumActionType |
    ToggleErrorActionType |
    ChangeCounterActionType

