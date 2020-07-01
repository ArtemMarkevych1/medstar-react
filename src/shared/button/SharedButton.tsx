import React from 'react'
import Button from '@material-ui/core/Button'
import { sharedButtonStyle } from './sharedButton.style'

export interface SharedButtonModel {
	label: string;
	onClick: ( e: any ) => void;
	filled: boolean;
}

export type PropTypes =
	& SharedButtonModel;

const SharedButton = ( { label, onClick, filled }: PropTypes ) => {
	const classes = sharedButtonStyle()
	return (
		<Button className={ filled ? classes.confirmBtn : classes.cancelBtn }
				onClick={ ( e ) => onClick( e ) }>
			{ label }
		</Button>
	)
}

export default SharedButton
