import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './page/home/home'
import Login from './page/login/login'

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/home" exact component={Home} />
			</Switch>
		</Router>
	)
}

export default App
