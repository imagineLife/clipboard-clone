const React = require("react")
const ReactDOM = require("react-dom")
require('./index.css') 
const App = () => {
	return(<p>react component</p>)
}

console.log('INDEX?@');

ReactDOM.render(<App />, document.getElementById("app"));