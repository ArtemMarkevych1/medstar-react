import React, { useState } from 'react';
import CustomizedTable from './CustomizedTable/CustomizedTable';
import Graph from './Graph/Graph';
import { abbrFilterType } from '../../../../models/types'

const MainContent: React.FC = () => {
	const [abbrFilter, setAbbrFilter] = useState<abbrFilterType>('ALL');
	return (
		<React.Fragment>
			<Graph
				abbrFilter={abbrFilter}
				setAbbrFilter={setAbbrFilter}
			/>
			<CustomizedTable
				abbrFilter={abbrFilter}
			/>
		</React.Fragment>
	);
}

export default MainContent;
