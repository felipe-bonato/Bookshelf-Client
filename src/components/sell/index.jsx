import React from 'react'

export default function Sell(props) {
	return (
		<div className="content">
			<form action="/api/sell" method="POST" encType="multipart/form-data" className="bsForm">
				<fieldset>
					<label htmlFor="image">Image</label>
					<input id="image" type="file" name="image" />
				</fieldset>
				<fieldset>
					<label htmlFor="name">Name</label>
					<input id="name" type="text" name="name" />
				</fieldset>
				<fieldset>
					<label htmlFor="author">Author</label>
					<input id="author" type="text" name="author" />
				</fieldset>
				<fieldset>
					<label htmlFor="price">Price</label>
					<input id="price" type="number" name="price" />
				</fieldset>
				<fieldset>
					<button type="submit" value="Submit">Sell</button>
				</fieldset>
			</form>
		</div>
	)
}

// <Base title="Sell" hasPageTitle={true} showNavBar={true}>
