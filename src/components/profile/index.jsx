import React from 'react'

export default class Profile extends React.Component {
	constructor(props) {
		props.user = { 'email': 'test@email.com'}
		super(props)
	}

	render() {
		return (
			<div className="content">
				<div className="profile_email">
					<span>Email</span>
					<h3>{ this.props.user.email }</h3>
				</div>
				<button className="button">Logout</button>
			</div>
		)
	}
}

//<Base title="Profile" hasPageTitle={true} showNavBar={true}>
