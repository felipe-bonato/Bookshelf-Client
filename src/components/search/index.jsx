import React from 'react'

export default function Search(props) {
	return (
		<div className="content">
			<form action="/api/search" method="GET" className="form">
				<fieldset>
					<label htmlFor="searchQuery">Query</label>
					<input id="searchQuery" type="search" name="searchQuery" />
				</fieldset>
				<fieldset>
					<button type="submit">Search</button>
				</fieldset>
			</form>
		</div>
	)
}

// <Base title="Search" hasPageTitle={true} showNavBar={true}>
