import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../stylus/main.styl'

export default class AppView extends Component {
	constructor(props) {
		super(props);

		this.state = {}
	}

	render() {
		return (
			<div className='main'>
				<header>
					<Link className='title' to="/">
						<div>Boiler</div>
					</Link>
					<nav>
						<div className='wrapper'>
							<ul>
								<NavLink activeClassName='active' exact to='/'>
									<li>
										Home
									</li>
								</NavLink>
							</ul>
						</div>
					</nav>
				</header>

				<div className='children'>
					{this.props.children}
				</div>
				<footer>
					Footer
				</footer>
			</div>
		);
	}
}
