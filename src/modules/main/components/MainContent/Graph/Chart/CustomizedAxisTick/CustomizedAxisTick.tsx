import React from 'react';
import { datetimeFormat, dateTimeFormatter } from '../../../../../../../utils/dateAndTimeFormatter'

interface IProps {
	x: number;
	y: number;
	stroke: string;
	payload: {
		value: string,
	}
}

const CustomizedAxisTick: React.FC<IProps> = ({x, y, stroke, payload}) => {
	const value = dateTimeFormatter(payload.value, datetimeFormat);
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={0}
				y={0}
				dy={4}
				fontSize='12px'
				textAnchor="end"
				fill="#666"
				transform="rotate(-90)"
			>
				{value}
			</text>
		</g>
	);
}

export default CustomizedAxisTick;
