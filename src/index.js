import React from "react";

// 创建一个context
const ThemeContext = React.createContext('light')
// 创建一个context
const UserContext = React.createContext({
    name: 'Guest'
})

