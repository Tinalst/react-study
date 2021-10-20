import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

export default function BasicExample() {
    return (
        <Router>
            {/* 2. 定义路由跳转页面*/}
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/dashboard"}>Dashboard</Link>
                    </li>
                </ul>
            </div>

            {/*定义路由表*/}
            <Switch>
                <Route exact path={"/"}>
                    <Home/>
                </Route>

                <Route path={"/about"}>
                    <About/>
                </Route>

                <Route path={"/dashboard"}>
                    <Dashboard/>
                </Route>
            </Switch>
        </Router>
    )
}

// 1/ 定义路由组件
function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    )
}