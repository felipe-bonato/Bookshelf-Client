import React from 'react'
import NavBarItem from './../../components/navbar/navBarItem'
import '../../styles/navbar.css'

export default function NavBar(props) {
	return (
		<nav id="NavBar_con">
            <NavBarItem>
                <a href="/profile"><img height="100%" src="/src/imgs/navbar/profile_unselected.svg" alt="Profile"/></a>
            </NavBarItem>
            <NavBarItem>
                <a href="/home"><img height="100%" src="/src/imgs/navbar/home_unselected.svg" alt="Home"/></a>
            </NavBarItem>
            <NavBarItem>
                <a href="/search"><img height="100%" src="/src/imgs/navbar/search_unselected.svg" alt="Search"/></a>
            </NavBarItem>
            <NavBarItem>
                <a href="/sell"><img height="100%" src="/src/imgs/navbar/sell_unselected.svg" alt="Sell" /></a>
            </NavBarItem>
		</nav>
	)
}
