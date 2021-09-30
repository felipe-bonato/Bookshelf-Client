import React from 'react'
import NavBar from './../../components/navbar/navBar'
import Title from './../../components/layouts/title'
import '../../styles/index.css'

export default function App(props) {
	return (
		<div className="App">
			<main className="main">
				{ props.hasPageTitle && <Title main={ props.title } /> }
				{ props.children }
			</main>
			{ props.showNavBar && <NavBar /> }
		</div>
	)
}
