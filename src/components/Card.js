import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	render(){
		return(
			<React.Fragment>
				<div className='card'>
					<div className='clg-name'>{this.props.name}</div>
					<div className='period'>{this.props.time}</div>
					<div>{this.props.type}</div>
					<div>{this.props.marks}</div>
				</div>
			</React.Fragment>
		)
	}
}