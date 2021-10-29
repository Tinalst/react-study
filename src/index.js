import {makeAutoObservable} from "mobx";
import {observer} from "mobx-react-lite";
import * as ReactDOM from "react-dom";


class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const timer = new Timer();

const TimerView = observer(
    () => {
        return (
            <span>
                seconds passed: {timer.secondsPassed}
            </span>
        )
    }
)

// 可被观察对象timer通过组件的props属性传入
ReactDOM.render(
    <TimerView/>,
    document.getElementById('root')
)


// test observable state
setInterval(() => {
    timer.increaseTimer()
}, 1000)