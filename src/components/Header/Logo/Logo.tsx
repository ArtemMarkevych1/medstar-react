import React, { useEffect, useState } from 'react';
import Api from '../../../api/Api';
import { logoStyle } from './logo.style'

const Logo: React.FC = () => {
	const classes = logoStyle();
	const [logo, setLogo] = useState('');

	useEffect(() => {
		Api.getLogo()
			.then(res => setLogo(res.data))
			.catch(err => console.log(err));
	}, [])
	return (
		<div className={classes.logoWrapper}>
			{logo && <img src={URL.createObjectURL(logo)} alt="logo"/>}
		</div>
	);
}

export default Logo;
