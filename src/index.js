/**
 * 因为props 只能自上而下的传给子组件
 * 如果真正要用props的是孙子组件，中间挨着一个子组件每次都要写名传递的属性很麻烦
 * 所以可以创建一个context上下文，就不需要为子组件手写传递的props且孙子组件也可以拿到数据了
 */
import React from "react";
import * as ReactDOM from "react-dom";


// 定义一个react 上下文
// defaultvalue light - 只有当组件所处的树没有匹配到对应的provider时 才生效
const ThemeContext = React.createContext('light');
// 设置 context的显示名称
// ThemeContext.displayName = 'MyDisplayName'

class App extends React.Component {
    render() {
        return (
            // 设置 ThemeContext 值为dark 传递给consumer
            <ThemeContext.Provider value={'dark'} >
                <Toolbar/>
            </ThemeContext.Provider>
        )
    }
}

function Toolbar() {
    return (
        <div>
            <ThemedButton/>
        </div>
    )
}

class ThemedButton extends React.Component {
    // 指定 contextType 读取当前的 context
    // 从这往上找 ThemeContext
    // class.contextType
    static contextType = ThemeContext

    render() {
        // 由React.createContext() 创建的Context对象 -> 挂载到class.contextType 之后
        // 就可以使用this.context获取最新的context值
        // 可以在任何的声明周期中访问这个值
        return <p>{this.context}</p>
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('root')
)