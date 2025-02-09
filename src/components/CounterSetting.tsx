import {ChangeEvent, useEffect} from "react";
import {Input} from "./Input.tsx";
import {Button} from "./Button.tsx";
import s from './../styles/styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {counterErrorSelector, counterMaximumSelector, counterSelector, counterStartSelector} from "../store/selectors/counterSelector.ts";
import {changeCounterAC, changeInputMaximumAC, changeInputStartAC, toggleErrorAC} from "../store/actions/counterActions.ts";
import {AppRootStateType} from "../types/counter.ts";



export const CounterSetting = () => {
    const counterValue = useSelector<AppRootStateType, string>(counterSelector)
    const start = useSelector<AppRootStateType, string>(counterStartSelector)
    const max = useSelector<AppRootStateType, string>(counterMaximumSelector)
    const error = useSelector<AppRootStateType, boolean>(counterErrorSelector)
    const dispatch = useDispatch()

    useEffect(() =>{
        dispatch(toggleErrorAC(+start === + +max || +start > +max))
    },[start, max])

    const checkCounterValue = () =>{
        counterValue.length < 4 ? dispatch(changeCounterAC('enter value and press SET')): null
    }
    const onChangeStartValue = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputStartAC(e.currentTarget.value))
        checkCounterValue()
    }

    const onChangeMaxValue = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(changeInputMaximumAC(e.currentTarget.value))
        checkCounterValue()
    }

    const setValueHandler = () =>{
        dispatch(changeCounterAC(start))
    }

    return (
        <div className={s.settingWrap}>
            <fieldset>
            <legend>Start value</legend>
                <Input
                    className={error ? s.inputError : ''}
                    type="number"
                    onChange={onChangeStartValue}
                    value={start}/>
            </fieldset>
            <fieldset>
            <legend>Maximum value</legend>
                <Input
                    className={+error ? s.inputError : ''}
                    type="number"
                    onChange={onChangeMaxValue}
                    value={max}/>
            </fieldset>
            <Button onClick={setValueHandler} disabled={error || counterValue.length < 4} name="set"/>
        </div>
    );
};
