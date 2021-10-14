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

class Clock extends React.Component {
    render() {
        return (
            <div>
                 <p>It's {this.props.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)