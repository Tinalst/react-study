import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import * as ReactDOM from "react-dom";

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Users() {
    return <h2>Users</h2>
}

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"about"}>Users</Link>
                        </li>
                        <li>
                            <Link to={"users"}>Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/*下面这个是展示*/}
            <Switch>
                <Route path={"/about"}>
                    <About/>
                </Route>
                <Route path={"/users"}>
                    <Users/>
                </Route>
                <Route path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)