import { createStyles, makeStyles, Theme } from '@material-ui/core'

export const ressetPasswordStyles = makeStyles( ( theme: Theme ) =>
	createStyles( {
		root: {
			width: '460px',
			margin: theme.spacing( 1 )
		},
		authForm: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '510px',
			height: '550px',
			backgroundColor: '#fff',
			borderRadius: '8px',
			zIndex: 3
		},
		formInput: {
			margin: '10px 20px',
			padding: '10px 10px 10px 25px',
			boxShadow: '0px 0px 15px rgba(206, 212, 227, 0.4)',
			borderRadius: '5px',
			color: '#BCBBD9',
			'&::before': {
				content: 'none'
			},
			'&::after': {
				content: 'none'
			}
		},
		links: {
			width: '420px',
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			marginTop: '10px',
			marginBottom: '30px'
		},
		linkSpan: {
			fontWeight: 'normal',
			color: '#111'
		},
		btnSubmit: {
			marginTop: '20px',
			padding: '15px 50px',
			backgroundColor: '#FF3D3D',
			color: '#fff',
			'&:hover': {
				transition: '.3s',
				backgroundColor: 'rgba(234, 16, 16)'
			}
		},
		btnLink: {
			fontWeight: 100,
			color: '#FF3D3D',
			textDecoration: 'underline',
			cursor: 'pointer'
		},
		customTool: {
			paddingRight: '30px',
			fontSize: '12px',
			lineHeight: '23px',
			backgroundColor: '#fff',
			borderRadius: '5px',
			color: '#2D3054'
		}
	} )
)
