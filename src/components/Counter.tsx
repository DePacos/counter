import {Button} from "./Button.tsx";
import s from './../styles/styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {counterErrorSelector, counterMaximumSelector, counterSelector} from "../store/selectors/counterSelector.ts";
import {changeCounterAC} from "../store/actions/counterActions.ts";

export const Counter = () => {
    const counterValue = useSelector(counterSelector)
    const max = useSelector(counterMaximumSelector)
    const error = useSelector(counterErrorSelector)
    const dispatch = useDispatch()

    const incHandler = () =>{
        dispatch(changeCounterAC((+counterValue + 1).toString()))
    }

    const resetHandler = () =>{
        dispatch(changeCounterAC('0'))
    }

    return (
        <div className={s.counterWrap}>
            <fieldset>
                <legend>Value</legend>
                <span className={counterValue === max || error ? s.inputMax: ''}>
                    {error ? 'incorrect value': counterValue}</span>
            </fieldset>
            <div className={s.buttonWrap}>
                <Button onClick={incHandler} disabled={counterValue === max || counterValue.length > 3} name="inc"/>
                <Button onClick={resetHandler} disabled={counterValue === '0' || counterValue.length > 3} name="reset"/>
            </div>
        </div>
    );
};

