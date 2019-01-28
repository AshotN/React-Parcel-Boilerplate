import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import App from './views/App';
import Home from './views/Home'
import NotFound from './views/404'



export default class Root extends Component {

	constructor(props) {
		super(props);

		this.state = {
		}
	}

	render() {
		return (
			<Router>
				<App>
					<Switch>
						<Route exact path="/" render={ (props) => <Home {...props} /> } />
						<Route path="*" render={ (props) => <NotFound {...props} /> }  />
					</Switch>
				</App>
			</Router>
		);
	}
}
