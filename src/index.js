import * as ReactDOM from "react-dom";
import React from "react";


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        // 控制是否降级显示ui的开关
        this.state = {
            hasError: true
        }
    }

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo) {
        console.error(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            /// 这是降级处理ui
            return <h1>Something went wroing.</h1>
        }

        // 如果没有异常就返回应该显示的元素
        return this.props.children
    }
}

function App() {
    return (
        <ErrorBoundary>
            <div>hahahah</div>
        </ErrorBoundary>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)