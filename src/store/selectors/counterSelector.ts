import {AppRootState} from "../../types/counter.ts";

export const counterStartSelector = (state: AppRootState) => state.counter.startValue
export const counterMaximumSelector = (state: AppRootState) => state.counter.maximumValue
export const counterErrorSelector = (state: AppRootState) => state.counter.error
export const counterSelector = (state: AppRootState) => state.counter.counterValue