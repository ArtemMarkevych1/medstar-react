import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const signUpStyle = makeStyles(( theme: Theme) => (
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
			marginTop: theme.spacing(3),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
			backgroundColor: '#0462bf',
			color: '#fff'
		},
		link: {
			fontSize: '1rem',
			fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: '0.00938em',
			textDecoration: 'none',
			color: '#0462bf'
		}
	} )
))
