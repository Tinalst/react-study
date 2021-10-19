import React from "react";
import * as ReactDOM from "react-dom";


class Cat extends React.Component {
    render () {
        const mouse = this.props.mouse;
        return (
            <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
        )
    }
}

class Mouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0
        }
    }

    handleMouseMove(e) {
        this.setState({
            x: e.clientX,
            y: e.clientY
        })
    }

    render() {
        return (
            <div style={{height: '100vh'}} onMouseMove={e => this.handleMouseMove(e)} >
                {/*this.props.render(this.state) 返回了CAT组件*/}
                {this.props.render(this.state)}
            </div>
        )
    }
}

class MouseTracker extends React.Component {
    render() {
        return (
            <div>
                鼠标移动
                <Mouse
                    render={mouse => (
                        <Cat mouse={mouse}/>
                    )}
                />
            </div>
        )
    }
}

ReactDOM.render(
    <MouseTracker/>,
    document.getElementById('root')
)