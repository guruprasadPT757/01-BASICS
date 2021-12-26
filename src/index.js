import React from "react"
import ReactDom from "react-dom"
import "./styles/style.css"
import Header from "./components/header"

const App = () =>  (
   <Header/>
)

ReactDom.render(<App/>, document.getElementById("root"))