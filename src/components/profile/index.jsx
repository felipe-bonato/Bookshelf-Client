const React = require('react')
const Base  = require('../layouts/app')

module.exports = function Profile(props) {
	return (
		<Base title="Profile" hasPageTitle={true} showNavBar={true}>
			<h2>{ props.user.email }</h2>
			<button className="bsButton">Logout</button>
		</Base>
	)
}
