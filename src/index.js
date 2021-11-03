import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";
import * as ReactDOM from "react-dom";
import {createContext, useContext} from "react";


class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const TimerContext = createContext<Timer>()

const TimerView = observer(() => {
    // 从context中获取timer.
    const timer = useContext(TimerContext) // 可以在上面查看 Timer的定义。
    return (
        <span>Seconds passed: {timer.secondsPassed}</span>
    )
})

ReactDOM.render(
    <TimerContext.Provider value={new Timer()}>
        <TimerView />
    </TimerContext.Provider>,
    document.body
)

// // 使用react context 共享整个观察子树
// const TimerContext = createContext<Timer>()
//
// const TimerView = observer(
//
//     () => {
//         const timer = useContext(TimerContext)
//
//         return (
//             <span>
//                 seconds passed: {timer.secondsPassed}
//             </span>
//         )
//     }
// )
//
// // 共享new Time()
// ReactDOM.render(
//     <TimerContext.provider  value={new Timer()}>
//         <TimerView/>
//     </TimerContext.provider>,
//     document.getElementById('root')
// )
//
//
// // test observable state
// setInterval(() => {
//     timer.increaseTimer()
// }, 1000)