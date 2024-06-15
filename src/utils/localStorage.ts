export const saveState = (state:{startValue: string, maxValue: string}) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('stateCounter', serializedState)
    } catch {
        console.log('local storage save error')
    }
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('stateCounter')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}