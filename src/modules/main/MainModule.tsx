import React from 'react'
import Header from './components/Header/Header'
import Logo from './components/Header/Logo/Logo'
import MainContent from './components/MainContent/MainContent'

const MainModule = () => {
	return (
		<React.Fragment>
			<Header>
				<Logo/>
			</Header>
			<MainContent/>
		</React.Fragment>
	)
}

export default MainModule
