import {BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from 'react-router-dom'

export default function BasicExample() {
    return (
        <Router>
            <div>
                <h2>account</h2>
                <ul>
                    <li>
                        <Link to={"/netflix"}>Netflix</Link>
                    </li>
                    <li>
                        <Link to={"/zillow-group"}>zillow-group</Link>
                    </li>
                    <li>
                        <Link to={"/yahoo"}>Yahoo</Link>
                    </li>
                    <li>
                        <Link to={"/modus-create"}>Modus Create</Link>
                    </li>
                </ul>
            </div>


        {/*    2. 定义路由表*/}
            <Switch>
                <Route path={"/:id"} children={<Child/>} />
            </Switch>
        </Router>
    )
}

// 1/ 定义路由组件
function Child() {
    let {id} = useParams();

    return (
        <div>
            <p>ID: {id}</p>
        </div>
    )
}