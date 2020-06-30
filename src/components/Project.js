import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Airplane from '../Assets/Airplane.png';
import BloodBank from '../Assets/BloodBank.jpg';
import TicTacToe from '../Assets/TicTacToe.png';

export default class Project extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<React.Fragment>
				<div className='division'>
					<h2 className='underline'>My Projects</h2>
					<p>Here are some of my works you might be interested to see</p>
					<div className='h-center'>
						<ProjectCard
							img={Airplane}
							name='Airplane'
							description='Simple OpenGL gaming application built using freeglut and SOIL2 as a mini-project in college'
							githubURL='https://github.com/Prajwal-P/CG-mini-project'/>
						<ProjectCard 
							img={BloodBank}
							name='Blood Bank Management System'
							description='Developed to help donors, blood banks and hospitals to automate the blood supply'
							githubURL='https://github.com/Prajwal-P/Blood-bank'/>
						<ProjectCard 
							img={TicTacToe}
							name='TicTacToe'
							description='A c++ program to play tic-tac-toe with minimax algorithm. Try to beat and it ;-)'
							githubURL='https://github.com/Prajwal-P/TicTacToe-with-AI'/>
					</div>
				</div>
			</React.Fragment>
		)
	}
}