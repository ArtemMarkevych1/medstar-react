import React from 'react'
import { Button } from '@material-ui/core'
import { forgotPasswordStyles } from './forgotPassword.style'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'


export const ForgotPassword = () => {
	const classes = forgotPasswordStyles()

	return (
		<Container component="main" maxWidth="xs" className={classes.root}>
			<h1 className={ classes.mainTitle }>Forgot Password</h1>
			<form noValidate autoComplete="off">
				<div className={ classes.wrapper }>
					<p className={ classes.title }>
						Lost your password? Please enter your email address. You will receive a link to create a
						new password via email.
					</p>

					<TextField id="outlined-basic" label="Email Address" variant="outlined" autoFocus fullWidth
							   required/>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={ classes.submit }
					>
						Reset password
					</Button>
					<Link
						to={ '/auth/sign-in' }
						className={ classes.link }>
						Remember your password?
					</Link>
				</div>
			</form>
		</Container>
	)
}
