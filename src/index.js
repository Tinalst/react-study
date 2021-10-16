import ThemeTogglerButton from "./theme-toggler-button";
import React from "react";
import {ThemeContext, themes} from "./theme-context";

function Content() {
    return (
        <div>
            <ThemeTogglerButton/>
        </div>
    )
}


class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleTheme = () => {
            this.setState((state) => ({
                theme: state.theme === themes.dark
                    ? themes.light
                    : themes.dark
            }))
        }

        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme
        }
    }


    render() {
        return (
            // 这样子 就能将this.state 传递给 Content下的 ThemeTogglerButton组件了
            <ThemeContext.Provider value={this.state}>
                <Content/>
            </ThemeContext.Provider>
        )
    }
}