import {AppRootStateType} from "../../types/counter.ts";

export const counterStartSelector = (state: AppRootStateType) => state.counter.startValue
export const counterMaximumSelector = (state: AppRootStateType) => state.counter.maximumValue
export const counterErrorSelector = (state: AppRootStateType) => state.counter.error
export const counterSelector = (state: AppRootStateType) => state.counter.counterValue