import {ThemeContext} from './theme-context'

function ThemeTogglerButton() {
    return (
        // 获取来自父辈组件的值 和出发父辈组件的方法
        <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <button
                    onClick={toggleTheme}
                    >
                    Toggle Theme
                </button>
            )}
        </ThemeContext.Consumer>
    )
}

export default ThemeTogglerButton;