import React, { useState, useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { graphNavigationStyle } from './graphNavigation.style';
import Api from '../../../../../../api/Api';
import { abbrFilterType } from '../../../../../../models/types'

interface IProps {
	setAbbrFilter: React.Dispatch<React.SetStateAction<abbrFilterType>>;
}

const GraphNavigation: React.FC<IProps> = ({ setAbbrFilter }) => {
	const [value, setValue] = useState<abbrFilterType>('ALL');
	const classes = graphNavigationStyle();
	const [abbrFilters, setAbbrFilters] = useState<abbrFilterType[]>([]);

	useEffect(() => {
		Api.getFilters()
			.then(res => setAbbrFilters(['ALL', ...res.data]))
			.catch(err => console.error(err));
	}, [])

	const onActionClickHandler = (abbrFilter: abbrFilterType) => {
		setAbbrFilter(abbrFilter);
	}

	return (
		<div className={classes.graphNavigationWrapper}>
			<BottomNavigation
				className={classes.navigation}
				value={value}
				onChange={(event, newValue) => setValue(newValue)}
				showLabels
			>
				<div className={classes.navigationLabel}>Unit Abbr</div>
				{abbrFilters.map((item, i) => (
					<BottomNavigationAction
						key={i}
						onClick={() => onActionClickHandler(item)}
						className={classes.action}
						showLabel
						label={item}
						value={item}
					/>)
				)}
			</BottomNavigation>
		</div>
	);
}

export default GraphNavigation;
