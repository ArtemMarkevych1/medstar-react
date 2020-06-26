import React from 'react'
import { Container } from '@material-ui/core'
import MainModule from './modules/main/MainModule'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthModule } from './modules/auth/AuthModule'

const App = () => {
	return (
		<div className="App">
			<Container maxWidth='xl'>
				<BrowserRouter>
					<Switch>
						<Route path='/auth' component={ AuthModule }/>
						<Route path='/' exact component={ MainModule }/>
					</Switch>
				</BrowserRouter>
			</Container>
		</div>
	)
}

export default App
