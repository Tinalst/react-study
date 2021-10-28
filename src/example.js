import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
    useParams,
    useRouteMatch
} from "react-router-dom"


function Home() {
    return (
        <div>
            <h2>HOME</h2>
        </div>
    )
}

function Topics() {
    // path - 相对父路由的path
    // url - 相对路径url
    let {path, url} = useRouteMatch()
    console.log('path', path);
    console.log('url', url);

    return (
        <div>
            <h2>Topics</h2>
           <ul>
               <li>
                   <Link to={`${url}/rending`}>Rendering with React</Link>
               </li>
               <li>
                   <Link to={`${url}/components`}>Components</Link>
               </li>
               <li>
                   <Link to={`${url}/props-v-state`}>Props v. State</Link>
               </li>
           </ul>


            <Switch>
                <Route exact path={path}>
                    <h3>nesting ctx</h3>
                </Route>

                <Route path={`${path}/:topicId`}>
                    <Topic/>
                </Route>
            </Switch>
        </div>
    )
}

function Topic() {
    // :/id/:topicId
    let {topicId} = useParams();

    return (
        <div>
            <h3>{topicId}</h3>
        </div>
    )
}

export default function NestingExample() {
    return (
        <Router>
            <div>
                <li>
                    <Link to={"/home"}> Home </Link>
                </li>
                <li>
                    <Link to={"/topics"}> Topics </Link>
                </li>
            </div>

            {/*    1/ 定义路由表*/}
            <Switch>
                {/*exact 严格匹配???*/}
                <Route exact path={"/"}>
                    <Home/>
                </Route>

                <Route path={"/topics"}>
                    <Topics/>
                </Route>
            </Switch>
        </Router>
    )
}