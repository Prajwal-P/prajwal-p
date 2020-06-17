import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from "react-router-tabs";
import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import profile_pic from '../Assets/profile-pic-2.jpg'


class SideNav extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<React.Fragment>
				<HashRouter basename='/'>
					<div className='app-wrapper'>
						<div className="side-nav">
							<div className="profile">
								<img alt='My Pic' src={profile_pic}/>
								<h1>Prajwal P</h1>
							</div>
							<RoutedTabs activeTabClassName='active' className='links'>
								<NavTab to='/home' className='link-item'>
									<div><i className="fas fa-home"></i> Home</div>
								</NavTab>
								<NavTab to='/project' className='link-item'>
									<div><i className="fas fa-briefcase"></i> Project</div>
								</NavTab>
								<NavTab to='/contact' className='link-item'>
									<div><i className="far fa-envelope-open"></i> Contact</div>
								</NavTab>
							</RoutedTabs>
							<div className="collection">
								<a href='https://github.com/Prajwal-P' target='_blank' rel="noopener noreferrer">
									<i className="fab fa-github fa-2x"></i>
								</a>
								<a href='https://www.linkedin.com/in/prajwal-p-21a9ba172/' target='_blank' rel="noopener noreferrer">
									<i className="fab fa-linkedin-in fa-2x"></i>
								</a>
								<a href='https://www.hackerrank.com/prajwal72p' target='_blank' rel="noopener noreferrer">
									<i className="fab fa-hackerrank fa-2x"></i>
								</a>
								<a href='https://www.youracclaim.com/users/prajwal/badges' target='_blank' rel="noopener noreferrer">
									<i className="fas fa-medal fa-2x"></i>
								</a>
							</div>
						</div>
						<div className='main'>
							<Switch>
								<Route exact path='/home' component={Home} />
								<Route path='/contact' component={Contact} />
								<Route path='/project' component={Project} />
								<Route>
									<Redirect to='/home' />
								</Route>
							</Switch>
						</div>
					</div>
				</HashRouter>
			</React.Fragment>
		)
	}
}

export default SideNav;