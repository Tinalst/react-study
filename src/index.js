import React from "react";
import * as ReactDOM from "react-dom";

// elementry
// const name = 'xxx';
// const element = <h1>hahah {name}</h1>
//
// ReactDOM.render(
//     element,
//     document.getElementById('root')
// )

// clock 定时器 v1版本
// function tick() {
//
//     const element = (
//         <div>
//             <h1>hello</h1>
//             <h2>It's {new Date().toLocaleTimeString()}</h2>
//         </div>
//     )
//     ReactDOM.render(
//         element,
//         document.getElementById('root')
//     )
// }
//
// setInterval(tick, 1000)

// 组件要大写开始
// function Clock(props) {
//     return (
//         <div>
//             <p>It's {props.date.toLocaleTimeString()}</p>
//         </div>
//     )
// }

/**
 * 组件执行顺序： ReactDOM.render() -> 组件constructor() -> 组件render() ->
 * 组件componentDidMoundt()
 */
class Clock extends React.Component {
    constructor(props) {
        // 将props传递到父类的构造函数中
        super(props);
        // 构造函数是唯一能给this.state赋值的地方
        // 状态变量更新 依赖this.state 和 this.props，需要使用函数 ： (state, props) => {xxxx}
        this.state = {
            date: new Date()
        }
    }

    // 组建已经挂载到DOM上
    componentDidMount() {
        // 添加不参与数据流（如this.props this.state）的额外字段
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    // 组建即将被移除
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                 <p>It's {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}


// class类型组件事件绑定
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        }

    }

    handleClick() {
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    render() {
        return (
            <button onClick={() => this.handleClick()}>
                {this.state.isToggleOn ? 'on' : 'off'}
            </button>
        )
    }
}

function tick() {
    ReactDOM.render(
        <Toggle/>,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)