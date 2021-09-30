var React = require('react')
var Base  = require('../layouts/app')

module.exports = function Book(props) {
	return (
		<Base title={ props.book.name } hasPageTitle={true} showNavBar={true}>
			<ul className="bsBook_listing">
				<li><img src={ `/uploads/${props.book._id}.jpg`} alt="" width="100%" /></li>
				<li><label>Author: </label>{ props.book.author }</li>
				<li><label>Price: </label>{ props.book.price }</li>
			</ul>
			<button class="bsButton">Buy</button>
		</Base>
	)
}
