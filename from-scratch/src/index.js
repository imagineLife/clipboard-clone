const React = require("react")
const ReactDOM = require("react-dom")
require('./index.css') 
const App = () => {
	return(<p>react component</p>)
}

/*
	... manually build div
*/
let root = document.createElement('div')
root.id = 'app'
document.body.appendChild(root)

ReactDOM.render(<App />, document.getElementById("app"));