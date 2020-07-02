import React, { Component } from 'react'
import page1 from '../Assets/Prajwal P 01.jpg';
import page2 from '../Assets/Prajwal P 02.jpg';
import CV from '../Assets/Prajwal.pdf'

export default class Resume extends Component{
	render(){
		return(
			<React.Fragment>
				<div className='resume'>
					<h2 className='underline'>My Resume</h2>
					<div className='img-wrapper'>
						<img src={page1} alt='My resume page 1' />
						<img src={page2} alt='My resume page 2' />
					</div>
					<button><a href={CV} download='Prajwal P'>Download Resume</a></button>
				</div>
			</React.Fragment>
		)
	}
}