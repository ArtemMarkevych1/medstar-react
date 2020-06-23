import React from 'react';
import { headerStyle } from './header.style'

const Header: React.FC = ({ children }) => {
	const classes = headerStyle();
	return (
		<div className={classes.headerWrapper}>
			{children}
		</div>
	);
}

export default Header;
