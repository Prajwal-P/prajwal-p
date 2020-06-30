import React, { Component } from 'react';

export default class ProjectCard extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<React.Fragment>
				<div className='project-card'>
					<img src={this.props.img} alt={this.props.name}/>
					<div className='text'>
						<div className='name underline'>{this.props.name}</div>
						<div className='description'>{this.props.description}</div>
						<a href={this.props.githubURL} target='_blank' rel='noopener noreferrer'><i class="fab fa-github"></i> GitHub</a>
					</div>
				</div>
			</React.Fragment>
		)
	}
}