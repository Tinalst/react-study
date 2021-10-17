import React from "react";
import * as ReactDOM from "react-dom";

// 定义组件
// const FancyButton = React.forwardRef(((props, ref1) => {
//     return (
//         <button ref={ref1}>
//             {props.children}
//         </button>
//     )
// }))

const FancyButton = React.forwardRef(function myFunction (props, ref1) {
    return (
        <button ref={ref1}>
            {props.children}
        </button>
    )
})

// 1. 创建react.ref
const ref = React.createRef();

//2. ref变量传递给组件
ReactDOM.render(
    // 传递ref变量值给到组件的forwardRef参数
    <FancyButton ref={ref}>click me</FancyButton>,
    document.getElementById('root')
)
