import {LocalStorageSaveType} from "../types/counter.ts";

export const saveState = (state: LocalStorageSaveType, localStorageKey: string) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem(localStorageKey, serializedState)
    } catch {
        console.log('local storage save error')
    }
}

export const loadState = (localStorageKey: string) => {
    try {
        const serializedState = localStorage.getItem(localStorageKey)
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}