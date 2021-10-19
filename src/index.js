import {useState} from "react";
import * as ReactDOM from "react-dom";

function Example() {
    // 声明一个count的state变量，以及修改count的方法
    // count 初始变量为 0
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                click
            </button>
        </div>
    )
}

ReactDOM.render(
    <Example/>,
    document.getElementById('root')
)