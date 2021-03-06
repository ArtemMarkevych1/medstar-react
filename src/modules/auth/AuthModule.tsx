import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SignIn from './routes/sign-in/SignIn'
import { ForgotPassword } from './routes/forgot-password/ForgotPassword'
import { ForgotPasswordSuccess } from './routes/forgot-password/forgot-password-success/ForgotPasswordSuccess'
import SignUp from './routes/sign-up/SignUp'
import ResetPassword from './routes/reset-password/ResetPassword'

export const AuthModule = () => {

	return (
		<Switch>
			<Route exact path='/auth/sign-in' component={ SignIn }/>
			<Route exact path='/auth/sign-up' component={ SignUp }/>
			<Route exact path='/auth/forgot' component={ ForgotPassword }/>
			<Route exact path='/auth/forgot-success' component={ ForgotPasswordSuccess }/>
			<Route exact path='/auth/reset' component={ ResetPassword }/>
			<Redirect from={ '/' } to={ '/auth/sign-in' }/>
		</Switch>
	)
}
