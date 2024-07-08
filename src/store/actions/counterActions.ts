import {
    ChangeCounterActionType,
    ChangeInputMaximumActionType,
    ChangeInputStartActionType,
    ToggleErrorActionType
} from "../../types/counter.ts";

export const changeInputStartAC = (value: string):ChangeInputStartActionType => {
     return {
         type: 'CHANGE_INPUT_START',
         value
     }
}
export const changeInputMaximumAC = (value: string):ChangeInputMaximumActionType => {
     return {
         type: 'CHANGE_INPUT_MAX',
         value
     }
}

export const toggleErrorAC = (value: boolean):ToggleErrorActionType => {
    return {
        type: 'TOGGLE_ERROR',
        value
    }
}
export const changeCounterAC = (value: string):ChangeCounterActionType => {
    return {
        type: 'CHANGE_COUNTER',
        value
    }
}
