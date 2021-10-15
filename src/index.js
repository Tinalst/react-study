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


// return null 阻止组件渲染

function WarningBanner(props) {
    if(!props.warn) {
        // 阻止组件渲染， dom组件会被移除
        return null;
    }

    return (
        <div>warning!</div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showWarning: true
        }
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }


    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={() => this.handleToggleClick()}>
                    {this.state.showWarning ? 'hide': 'show'}
                </button>
            </div>
        )
    }
}


// jsx支持返回元素
function ListItem(props) {
    return <li>{props.value}</li>
}

function NumberList(props) {
    const numbers = props.numbers
    // const listItems = numbers.map( number =>
    //     // key 应该在数组的上下文中被指定
    //     <ListItem
    //         value={number}
    //         key={number.toString()}
    //     />
    //     // <li key={number.toString()}>
    //     //     {number}
    //     // </li>
    // )

    return (
        // <ul>{listItems}</ul>
        <ul>
            {
                numbers.map( number =>
                    // key 应该在数组的上下文中被指定
                    <ListItem
                        value={number}
                        key={number.toString()}
                    />
                    // <li key={number.toString()}>
                    //     {number}
                    // </li>
                )
            }
        </ul>
    )
}
const numbers = [1,2,3,4,5];


// 受控组件 —— input
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    名字:
                    <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)}/>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

// 受控组件 textarea
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.value)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    文章:
                    <textarea value={this.state.value} onChange={e => this.handleChange(e)} />
                    <input type="submit" value="提交"/>
                </label>
            </form>
        )
    }
}

// 受控组件 - select
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'pork'
        }
    }

    handleSubmit(e) {
        console.log(this.state.value)
        e.preventDefault()
    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    请选择:
                    <select value={this.state.value} onChange={(e) => this.handleChange(e)}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="pork">大猪蹄子</option>
                    </select>
                </label>
                <input type="submit" value="提交"/>
            </form>
        )
    }
}

// 受控组件 - 处理多个输入
class Reservation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isGoing: true,
            numberOfGuests: 2
        }
    }


    handleSubmit(e) {
        console.log(this.state)
        e.preventDefault()
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name

        // 动态的设置name
        this.setState({
            [name]: value
        })

        console.log(name, value);
    }

    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <label>
                    参与:
                    {/*让表单name和state的key名一致，就可以根据名字设置对应的值 */}
                    <input type="checkbox"
                           name="isGoing"
                           checked={this.state.isGoing}
                           onChange={e => this.handleInputChange(e)}
                    />
                </label>
                <br/>
                <label>
                    来宾人数:
                    {/*让表单name和state的key名一致，就可以根据名字设置对应的值 */}
                    <input
                        type="number"
                        name="numberOfGuests"
                        value={this.state.numberOfGuests}
                        onChange={e => this.handleInputChange(e)}
                    />
                </label>

                <input type="submit" value="提交"/>
            </form>
        )
    }
}

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p>The water would bild.</p>
    }
    return <p>The water would not boil.</p>
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends React.Component {
    scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }

    constructor(props) {
        super(props);
        // this.state = {
        //     temperature : ''
        // }
    }

    handleChange(e) {
        // this.setState({
        //     temperature: e.target.value
        // })
        // 会触发父组件的 onTemperatureChange 时间，间接触发父组件的 handleCelsiusChange 或者 handleFahrenheitChange方法
        // 其中e.target.value 会作为回调事件的参数传到父组件的真正触发的方法里
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        const temperature = this.props.temperature
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend> Enter temperature in {this.scaleNames[scale]}:</legend>
                <input
                    value={temperature}
                    onChange={e => this.handleChange(e)}
                />

                <BoilingVerdict celsius={parseFloat(temperature)}/>
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }


    handleCelsiusChange(temperature) {
        this.setState({
            temperature,
            scale: 'c'
        })
    }


    handleFahrenheitChange(temperature) {
        this.setState({
            temperature,
            scale: 'f'
        })
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale={'c'}
                    temperature={celsius}
                    onTemperatureChange={temperature => this.handleCelsiusChange(temperature)}
                />
                <TemperatureInput
                    scale={'f'}
                    temperature={fahrenheit}
                    onTemperatureChange={temperature => this.handleFahrenheitChange(temperature)}
                />
            </div>
        )
    }
}



function tick() {
    ReactDOM.render(
        <Calculator />,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)