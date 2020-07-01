import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const confirmModalStyle = makeStyles(( theme: Theme) => (
	createStyles( {
		root:{
			minWidth: '550px'
		},
		dialogActions: {
			display: 'flex',
			justifyContent: 'space-around'
		},
		dialogTitle: {
			display: 'flex',
			justifyContent: 'center'
		},
		dialog:{
			minWidth: '450px'
		},
		dialogContentText: {
			display: 'flex',
			justifyContent: 'center',
			fontSize: '18px'
		}
	})))
