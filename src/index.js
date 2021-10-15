import * as ReactDOM from "react-dom";
import React, {Suspense} from "react";

// 懒加载其他组件
const OtherComponent = React.lazy(async () => {
    import('./components/OtherComponent')
        // .then(module => ({default: module.OtherComponent}))
})

console.log(OtherComponent);

function MyComponent() {
    return (
        <div>
            {/* Suspense 支持一次性包裹多个懒加载组件*/}
            <Suspense fallback={<div>loading....</div>}>
                <section>
                    <OtherComponent/>
                </section>
            </Suspense>
        </div>

    )
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('root')
)