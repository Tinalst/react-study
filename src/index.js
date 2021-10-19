import React from "react";
import * as ReactDOM from "react-dom";

class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);

        // ref 回调写法
        this.setTextInputRef = el => {
            this.textInput  = el
        }

        this.focusTextInput = () => {
            if(this.textInput) this.textInput.focus()
        }
    }


    componentDidMount() {
        this.focusTextInput();
    }


    render() {
        return (
            <div>
                <input
                    type={"text"}
                    ref={this.setTextInputRef}
                />
                <input
                    type={"button"}
                    value={"click"}
                    onClick={this.focusTextInput}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <CustomTextInput/>,
    document.getElementById('root')
)