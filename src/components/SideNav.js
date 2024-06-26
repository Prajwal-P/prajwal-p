import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { RoutedTabs, NavTab } from "react-router-tabs";
import Home from './Home';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';
import profile_pic from '../Assets/profile-pic.jpg'


class SideNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
	}

	showMenu = () => {
		// console.log('Test')
		const menuBtn = document.querySelector('.menu-btn');
		const navBar = document.querySelector('.nav-bar');
		const sideNav = document.querySelector('.side-nav');
		const main = document.querySelector('.main');

		if(!this.state.showMenu){
			menuBtn.classList.add('close');
			navBar.classList.add('show');
			sideNav.classList.add('show');
			main.classList.add('no-scroll');
			
			this.setState({showMenu: true})
		} else {
			menuBtn.classList.remove('close');
			navBar.classList.remove('show');
			sideNav.classList.remove('show');
			main.classList.remove('no-scroll');
			
			this.setState({showMenu: false})
		}
	}
	
	closeMenu = () => {
		this.setState({showMenu: false})
	}

	render() {
		return (
			<React.Fragment>
				<HashRouter basename='/'>
					<div className='nav-bar'>
						<h1>Prajwal P</h1>
					</div>
					{/* Intentionally keeping menu button outside of nav-bar because,
						in mobile devices when side-nav is opened nav-bar should be hidden
						and the menu button should be displayed */}
					<div className="menu-btn" onClick={this.showMenu}>
						<div className="btn-line"></div>
						<div className="btn-line"></div>
						<div className="btn-line"></div>
					</div>
					<div className="side-nav">
						<div className="profile">
							<img alt='My Pic' src={profile_pic} />
							<h1>Prajwal P</h1>
						</div>
						<div className="menu-nav">
							<RoutedTabs activeTabClassName='active' className='links' onClick={this.showMenu}>
								<NavTab to='/home' className='link-item'>
									<div><i className="fas fa-home"></i> Home</div>
								</NavTab>
								<NavTab to='/project' className='link-item'>
									<div><i className="fas fa-briefcase"></i> Project</div>
								</NavTab>
								<NavTab to='/resume' className='link-item'>
									<div><i className="fas fa-file-alt"></i> Resume</div>
								</NavTab>
								{/* <NavTab to='/contact' className='link-item'>
									<div><i className="far fa-envelope-open"></i> Contact</div>
								</NavTab> */}
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
					</div>
					<div className='main'>
						<Switch>
							<Route exact path='/home' component={Home} />
							<Route path='/contact' component={Contact} />
							<Route path='/project' component={Project} />
							<Route path='/resume' component={Resume} />
							<Route>
								<Redirect to='/home' />
							</Route>
						</Switch>
					</div>
				</HashRouter>
			</React.Fragment>
		)
	}
}

export default SideNav;