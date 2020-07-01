import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const updateFormStyle = makeStyles( ( theme: Theme ) => (
	createStyles( {
		dialogActions: {
			display: 'flex',
			justifyContent: 'space-around',
			marginBottom: 10
		},
		formField: {
			display: 'flex',
			justifyContent: 'space-between',
			marginBottom: '10px'
		},
		formControl: {
			margin: theme.spacing( 1 ),
			minWidth: 150,
		},
		formControlAdress:{
			margin: theme.spacing( 1 ),
			minWidth: 190,
		},
		selectEmpty: {
			marginTop: theme.spacing( 2 ),
		},
		label: {
			marginRight: '15px',
			display: 'block',
			marginTop: '35px'
		},
		labelAdress:{
			marginRight: '15px',
			display: 'block',
			marginTop:'50px'
		},
		labelPicker:{
			marginRight: '15px',
			display: 'block',
			marginTop: '29px'
		},
		dialog: {
			minWidth: '450px'
		}
	} ) ) )
