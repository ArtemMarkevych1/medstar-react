import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { resetPassword } from './resetPassword.style'

export default function ResetPassword() {
	const classes = resetPassword()

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline/>
			<div className={ classes.paper }>
				<Typography component="h1" variant="h5">
					Create New Password*
				</Typography>
				<form className={ classes.form } noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="New Password"
						type="password"
						id="password"
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Repeat New Password"
						type="password"
						id="password"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						className={ classes.submit }
					>
						Save
					</Button>
				</form>
			</div>
		</Container>
	)
}

