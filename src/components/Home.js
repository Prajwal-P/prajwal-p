import React, { Component } from 'react';
import Card from './Card';
import Skill from './Skill';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<React.Fragment>
				<div className='division'>
					<h2 className='underline'>Education</h2>
					<Card name='Bangalore Institute of Technology'
						time='2021'
						marks='7.91 CGPA'
						type='B. E, Computer Science' />
					<Card name='Karkala JnanaSudha P.U College'
						time='2017'
						marks='Class XII 89.6%'
						type='Secondary High school, PCMC' />
					<Card name='M.E.S Kishora Kendra'
						time='2015'
						marks='Class X 91.2%'
						type='High School' />
				</div>
				<div className='division'>
					<h2 className='underline'>Skills</h2>
					<div className='h-center'>
						<Skill name='Reactjs' />
						<Skill name='Nodejs' />
						<Skill name='JS' />
						<Skill name='HTML' />
						<Skill name='CSS' />
						<Skill name='Python' />
						<Skill name='Java' />
						<Skill name='C/C++' />
						<Skill name='C#' />
						<Skill name='Git' />
					</div>
				</div>
				<div className='division'>
					<h2 className='underline'>Experience</h2>
					<h3>Papple Technologies</h3>
					<ul>
						<li>Developed a web app where students can attend quiz and prepare for exams</li>
						<li><span className='underline bold'>Tools:</span> Reactjs, Nodejs, MySQL, Visual Studio Code</li>
					</ul>
				</div>
			</React.Fragment>
		)
	}
}