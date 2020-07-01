import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const sharedButtonStyle = makeStyles( ( theme: Theme ) => (
	createStyles( {
		confirmBtn: {
			backgroundColor: theme.palette.secondary.main,
			color: '#fff',
			width: 150
		},
		cancelBtn:{
			color: theme.palette.secondary.main,
			width: 150
		}
	} ) ) )
