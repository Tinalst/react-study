import {Link, Switch, Route, useRouteMatch, BrowserRouter as Router} from "react-router-dom";
import * as ReactDOM from "react-dom";


function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                    <li>
                        <Link to={"/topics"}>Topics</Link>
                    </li>
                </ul>

                {/*此处是路由的视图窗口，要写到div里*/}
                <Switch>
                    <Route path={"/about"}>
                        <About/>
                    </Route>
                    <Route path={"/topics"}>
                        <Topics />
                    </Route>
                    {/* 这个要放到最后，不然视图切换不起来！！！！！！*/}
                    <Route path={"/"}>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}


function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

function Topics() {
    // let match = useRouteMatch()
    // console.log(match);

    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    {/*<Link>Components</Link>*/}
                </li>
                <li>

                </li>
            </ul>
        </div>

        // <Switch>
        //     <Route path={}></Route>
        // </Switch>
    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)