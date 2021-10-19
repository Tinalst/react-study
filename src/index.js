import React from "react";
import * as ReactDOM from "react-dom";

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个ref来存储textinput的dom元素
        this.textInput = React.createRef()
    }

    focusTextInput() {
        this.textInput.current.focus()
    }

    render() {
        return (
            <div>
                <input
                    type={"text"}
                    ref={this.textInput}/>
                <input
                    type={"button"}
                    value={"click"}
                    onClick={() => this.focusTextInput()}
                />
            </div>
        )
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建来一个ref存储自定义组件元素
        this.textInput = React.createRef();
    }

    componentDidMount() {
        // 通过current下的可以直接调用ref存储的自定义元素的方法和变量
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput}/>
        )
    }
}

ReactDOM.render(
    <AutoFocusTextInput/>,
    document.getElementById('root')
)