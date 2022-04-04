import React from 'react'

export default function Book(props) {
	return (
		<div className="content">
			<ul className="bsBook_listing">
				<li><img src={ `/uploads/${props.book._id}.jpg`} alt="" width="100%" /></li>
				<li><label>Author: </label>{ props.book.author }</li>
				<li><label>Price: </label>{ props.book.price }</li>
			</ul>
			<button class="bsButton">Buy</button>
		</div>
	)
}

// <Base title={ props.book.name } hasPageTitle={true} showNavBar={true}>