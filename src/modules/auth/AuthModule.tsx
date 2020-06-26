import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import SignIn from './routes/sign-in/SignIn'
import { ForgotPassword } from './routes/forgot-password/ForgotPassword'
import { ForgotPasswordSuccess } from './routes/forgot-password/forgot-password-success/ForgotPasswordSuccess'
import { ResetPassword } from './routes/reset-password/ResetPassword'
import SignUp from './routes/sign-up/SignUp'

export const AuthModule = () => {

	const history = useHistory()

	return (
			<Switch>
				<Route exact path='/auth/sign-in' component={ SignIn }/>
				<Route exact path='/auth/sign-up' component={SignUp}/>
				<Route exact path='/auth/forgot' component={ ForgotPassword }/>
				<Route exact path='/auth/forgot-success' component={ ForgotPasswordSuccess }/>
				<Route exact path='/auth/reset' component={ ResetPassword }/>
				<Redirect from={ '/' } to={ '/auth/sign-in' }/>
			</Switch>
	)
}
