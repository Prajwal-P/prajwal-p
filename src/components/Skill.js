import React, { Component } from 'react';

export default class Skill extends Component{
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<React.Fragment>
				<div className='skill'>
					{this.props.name}
				</div>
			</React.Fragment>
		)
	}
}