import {ButtonHTMLAttributes, InputHTMLAttributes} from "react";
import {rootReducer} from "../store/store.ts";

export type InputProps = InputHTMLAttributes<HTMLInputElement>
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export type CounterStateType = {
    startValue: string
    maximumValue: string
    counterValue: string
    error: boolean
}

export type ChangeInputStartActionType = {
    type: 'CHANGE_INPUT_START'
    value: string
}

export type ChangeInputMaximumActionType = {
    type: 'CHANGE_INPUT_MAX'
    value: string
}

export type ToggleErrorActionType = {
    type: 'TOGGLE_ERROR'
    value: boolean
}

export type ChangeCounterActionType = {
    type: 'CHANGE_COUNTER'
    value: string
}

export type LocalStorageSaveType = {
    counter: CounterStateType
}

export type AppRootStateType = ReturnType<typeof rootReducer>