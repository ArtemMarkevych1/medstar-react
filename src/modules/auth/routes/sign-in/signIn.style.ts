import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const signInStyle = makeStyles(( theme: Theme) => (
	createStyles( {
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: '#0462bf',
		},
		form: {
			width: '100%',
			marginTop: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
			backgroundColor: '#0462bf',
			color: '#fff'
		},
	} )
))
