import React, { Component } from 'react';
import Card from './Card.js';
import Skill from './Skill.js';
import Timeline from './Timeline.js';
import { experienceData } from './ExperienceData.js'
import { skills } from './SkillsList.js'

export default class Home extends Component {

	render() {
		return (
			<React.Fragment>
				<div className='division'>
					<h1>Hi there 👋️</h1>
				</div>
				<div className='division'>
					<h2 className='underline'>Experience</h2>
					<Timeline data={experienceData} />
				</div>
				<div className='division'>
					<h2 className='underline'>Skills</h2>
					<div className='h-center'>
						{skills.map((skill, idx) => <Skill key={idx} name={skill} />)}
					</div>
				</div>
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
			</React.Fragment>
		)
	}
}