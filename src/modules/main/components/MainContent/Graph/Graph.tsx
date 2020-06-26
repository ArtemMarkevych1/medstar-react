import React from 'react';
import GraphNavigation from './GraphNavigation/GraphNavigation';
import Chart from './Chart/Chart';
import { abbrFilterType } from '../../../../../models/types'

interface IProps {
	setAbbrFilter: React.Dispatch<React.SetStateAction<abbrFilterType>>;
	abbrFilter: abbrFilterType;
}

const Graph: React.FC<IProps> = ({ abbrFilter, setAbbrFilter }) => {

	return (
		<React.Fragment>
			<GraphNavigation setAbbrFilter={setAbbrFilter} />
			<Chart abbrFilter={abbrFilter} />
		</React.Fragment>
	);
}

export default Graph;
