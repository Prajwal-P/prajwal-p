import React from 'react';

const TimelineItem = ({ data }) => (
	<div className='timeline-item'>
		<h3 className='company-name'>{data.name}</h3>
		{data.roles.map((role, idx) => {
			return (
				<div key={idx} className='role'>
					<i className="fa-solid fa-location-arrow"></i>
					<h4 className='designation'>{role.designation}</h4>
					<h4>{role.period}</h4>
					<ul>
						{role.description.map((item, index) => {
							return (<li key={index}>{item}</li>)
						})}
					</ul>
				</div>
			)
		})}
	</div>
);

export default TimelineItem;
