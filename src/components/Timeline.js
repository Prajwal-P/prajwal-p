import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ data }) => (
	<div className="timeline-container">
		{data.map((data, idx) => {
			return (
				<TimelineItem key={idx} data={data} />
			)
		})}
	</div>
)

export default Timeline;