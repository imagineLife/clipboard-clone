const React = require("react")
const ReactDOM = require("react-dom")
require('./index.css') 
const App = () => {
	return(<p>react component</p>)
}

let newDiv = document.createElement('div')
const app = document.body.appendChild(newDiv)

ReactDOM.render(<App />, app);