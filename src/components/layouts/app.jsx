import React from 'react'
// import Title from './../../components/layouts/title'
import { HashRouter, Route, NavLink } from 'react-router-dom'

import Home from './../../components/home'
import Profile from './../../components/profile'
import Sell from './../../components/sell'
import Search from './../../components/search'

import NavBarItem from './navBarItem'
import Title from './title'

import '../../styles/index.css'
import '../../styles/navbar.css'

export default function App(props) {
	return (
		<HashRouter className="App">
			<main id="main">
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/profile">
					<Title text="Profile" />
					<Profile user={ {'email': 'oi'} } />
				</Route>
				<Route path="/sell">
					<Title text="Sell" />
					<Sell />
				</Route>
				<Route path="/search">
					<Title text="Search" />
					<Search />
				</Route>
			</main>
			<nav id="nav">
				<NavLink exact to="/"><NavBarItem name="home" selected={ props.select === "home" } /></NavLink>
				<NavLink to="/profile"><NavBarItem name="profile" selected={ props.select === "profile" } /></NavLink>
				<NavLink to="/search"><NavBarItem name="search" selected={ props.select === "search" } /></NavLink>
				<NavLink to="/sell"><NavBarItem name="sell" selected={ props.select === "sell" } /></NavLink>
			</nav>
		</HashRouter>
	)
}
