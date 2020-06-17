import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from "react-router-tabs";
import Home from './Home';
import Contact from './Contact';


class SideNav extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<React.Fragment>
				<HashRouter basename='/'>
					<div className="side-nav">
						Main
					</div>
					<RoutedTabs activeStyle={{ color: "Red", textDecoration: 'None' }}>
						<NavTab to='/home'>Home</NavTab>
						<NavTab to='/contact'>contact</NavTab>
						<NavTab to='/project'>Project</NavTab>
					</RoutedTabs>
					<main>
						<Switch>
							<Route exact path='/home' component={ Home }/>
							<Route path='/contact' component={ Contact }/>
							<Route>
								<Redirect to='/home' />
							</Route>
						</Switch>
					</main>
				</HashRouter>
			</React.Fragment>
		)
	}
}

export default SideNav;