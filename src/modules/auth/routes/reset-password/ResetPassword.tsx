import React from 'react'
import {
	Button,
	FormControl,
	Input,
	InputAdornment,
	Tooltip
} from '@material-ui/core'
import { Info, VpnKey } from '@material-ui/icons'
import { ressetPasswordStyles } from './resetPassword.style'
import TooltipText from './ToolTip'
// import { useLocation, useHistory } from 'react-router-dom'

export const ResetPassword = () => {
	const classes = ressetPasswordStyles()
	// const location = useLocation()
	// const history = useHistory()
	// const [ resetToken, setResetToken ] = useState( '' )

	// useEffect( () => {
	// 	const params = new URLSearchParams( location.search )
	// 	const resetToken = params.get( 'resetToken' )
	// 	resetToken && resetToken.length === 3 ? setResetToken( resetToken ) : history.push( '/auth/sign-in' )
	// }, [] )


	return (
		<div className={ classes.authForm }>
			<h3 style={ { color: '#2D3054' } }>Create New Password*</h3>
			<FormControl className={ classes.root }>
				<Input
					className={ classes.formInput }
					placeholder='New Password'
					id='password'
					startAdornment={
						<InputAdornment position='start'>
							<VpnKey style={ { color: 'EFEFF6' } }/>
						</InputAdornment>
					}
					endAdornment={
						<InputAdornment position='end'>
							<Tooltip
								title={ <TooltipText/> }
								placement='right-start'
								classes={ { tooltip: classes.customTool } }
							>
								<Info style={ { color: 'EFEFF6' } }/>
							</Tooltip>
						</InputAdornment>
					}
				/>
				<Input
					className={ classes.formInput }
					placeholder='Repeat New Password'
					id='new-password'
					startAdornment={
						<InputAdornment position='start'>
							<VpnKey style={ { color: 'EFEFF6' } }/>
						</InputAdornment>
					}
					endAdornment={
						<InputAdornment position='end'>
							<Tooltip
								title={ <TooltipText/> }
								placement='right-start'
								classes={ { tooltip: classes.customTool } }
							>
								<Info style={ { color: 'EFEFF6' } }/>
							</Tooltip>
						</InputAdornment>
					}
				/>
			</FormControl>
			<Button className={ classes.btnSubmit } variant='contained'>
				Save
			</Button>
		</div>
	)
}
