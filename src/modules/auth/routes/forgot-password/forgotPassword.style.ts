import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const forgotPasswordStyles = makeStyles( ( theme: Theme ) =>
	createStyles( {
		root:{
			marginTop: '64px',
		},
		paper: {
			marginTop: theme.spacing( 8 ),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		form: {
			width: '100%',
			marginTop: theme.spacing( 3 ),
		},
		submit: {
			margin: theme.spacing( 3, 0, 2 ),
			backgroundColor: '#0462bf',
			color: '#fff'
		},
		title: {
			margin: '0 0 1.41575em',
			color: '#262626',
			fontSize: '1rem',
			fontFamily: 'Roboto, Helvetica Neue, Arial, sans-serif',
			fontWeight: 400,
			lineHeight: '1.5',
		},
		link: {
			fontSize: '1rem',
			fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
			fontWeight: 400,
			lineHeight: 1.5,
			letterSpacing: '0.00938em',
			textDecoration: 'none',
			color: '#0462bf'
		},
		mainTitle: {
			fontSize: '1.5rem',
			fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
			fontWeight: 400,
			lineHeight: 1.33,
			letterSpacing: '0em',
		},
		wrapper:{
			padding: '16px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			border: '1px solid #eeeeee',
			borderRadius: '4px',
			minHeight: '350px',
		}
	} )
)
