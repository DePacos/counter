import {
    changeCounterActionType,
    changeInputMaximumActionType,
    changeInputStartActionType,
    toggleErrorActionType
} from "../../types/counter.ts";

export const changeInputStartAC = (value: string):changeInputStartActionType => {
     return {
         type: 'CHANGE_INPUT_START',
         value
     }
}
export const changeInputMaximumAC = (value: string):changeInputMaximumActionType => {
     return {
         type: 'CHANGE_INPUT_MAX',
         value
     }
}

export const toggleErrorAC = (value: boolean):toggleErrorActionType => {
    return {
        type: 'TOGGLE_ERROR',
        value
    }
}
export const changeCounterAC = (value: string):changeCounterActionType => {
    return {
        type: 'CHANGE_COUNTER',
        value
    }
}
