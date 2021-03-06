import React from 'react'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import { forgotPasswordStylesSuccess } from './forgotPasswordSuccess.style'
import Typography from '@material-ui/core/Typography'

export const ForgotPasswordSuccess = () => {
	const classes = forgotPasswordStylesSuccess()

	return (
		<Container component="main" maxWidth="xs" className={classes.root}>
			<Typography component="h1" variant="h5" className={ classes.mainTitle }>
				Forgot Password
			</Typography>
			<div className={ classes.wrapper }>
				<div className={ classes.response }>
					<p>
						Password reset email has been sent.
					</p>
				</div>
					<p className={ classes.message }>
						A password reset email has been sent to the email address on file for your account, but may take
						several minutes to show up in your inbox. Please wait at least 10 minutes before attempting
						another reset.
					</p>
					<Link
						to={ '/auth/sign-in' }
						className={ classes.link }
					>
						Remember your password?
					</Link>
			</div>
		</Container>
	)
}
