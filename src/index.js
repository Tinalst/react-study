import * as ReactDOM from "react-dom";

import {action, computed, makeObservable, observable} from "mobx";
import {observer} from "mobx-react-lite"


class ObservableTodoStore {
    todos = [];
    pendingRequests = 0;

    constructor() {
        // 创建可跟踪的对象
        makeObservable(this, {
            todos: observable,
            pendingRequests: observable,
            addTodo: action,
            completedTodosCount: computed,
            report: computed // 创建可从状态自动获得值并缓存
        })
    }

    // define action
    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        })
    }

    // define computed

    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        if (this.todos.length === 0)
            return "<none>";
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `Next todo: "${nextTodo ? nextTodo.task : "<none>"}". ` +
            `Progress: ${this.completedTodosCount}/${this.todos.length}`;
    }
}

const observableTodoStore = new ObservableTodoStore();


// observer使组件具有reaction特性
const TodoList = observer(({store}) => {
    const onNewTodo = () => {
        store.addTodo(prompt('Enter a new todo:','coffee plz'));
    }

    return (
        <div>
            { store.report }
            <ul>
                { store.todos.map(
                    (todo, idx) => <TodoView todo={ todo } key={ idx } />
                ) }
            </ul>
            { store.pendingRequests > 0 ? <marquee>Loading...</marquee> : null }
            <button onClick={ onNewTodo }>New Todo</button>
            <small> (double-click a todo to edit)</small>
            {/*<RenderCounter />*/}
        </div>
    );
})


const TodoView = observer(({todo}) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    }

    const onRename = () => {
        todo.task = prompt('Task name', todo.task) || todo.task;
    }

    return (
        <li onDoubleClick={ onRename }>
            <input
                type='checkbox'
                checked={ todo.completed }
                onChange={ onToggleCompleted }
            />
            { todo.task }
            { todo.assignee
                ? <small>{ todo.assignee.name }</small>
                : null
            }
            {/*<RenderCounter />*/}
        </li>
    );
})



ReactDOM.render(
    <TodoList store={observableTodoStore}/>,
    document.getElementById('root')
)