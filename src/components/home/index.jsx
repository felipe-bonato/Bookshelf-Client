import React from 'react'
import App from '../../components/layouts/app'
import Book from '../../components/home/book'

export default function Home(props) {
	return (
		<App title="Home" showNavBar={true}>
			<div className="bsHome_bookcon">{ props.books ?
					props.books.map(
					(book, idx) => <Book
						title={ book.name }
						author={ book.author }
						coverImg={ `${book._id}.jpg` }
						bookId={ book._id }
						key={ idx }
					/> )
					: "There's none book right now"
				}</div>
		</App>
	)
}