import s from './styles/styles.module.css'
import {CounterSetting} from "./components/CounterSetting.tsx";
import {Counter} from "./components/Counter.tsx";

export const App = () => {
  return (
      <div className={s.appWrap}>
          <CounterSetting/>
          <Counter/>
      </div>
  )
}
