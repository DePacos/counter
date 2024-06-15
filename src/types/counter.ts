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

export type changeInputStartActionType = {
    type: 'CHANGE_INPUT_START'
    value: string
}

export type changeInputMaximumActionType = {
    type: 'CHANGE_INPUT_MAX'
    value: string
}

export type toggleErrorActionType = {
    type: 'TOGGLE_ERROR'
    value: boolean
}

export type changeCounterActionType = {
    type: 'CHANGE_COUNTER'
    value: string
}

export type AppRootState = ReturnType<typeof rootReducer>