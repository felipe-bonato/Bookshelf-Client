import React from 'react'
import Book from '../../components/home/book'
// import mainUrl from '../../helpers/bsUrls'

const bsBackendUrl = 'http://localhost:8080/'

export default class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = { books: [] }
	}

	componentDidMount() {
		fetch(bsBackendUrl + 'api/home')
			.then(res => res.json())
			.then(data => this.setState({ 'books': data.books }))
			.catch(console.error)
	}

	render() {
		return (
			<div className="content">
				{ this.state.books ?
					<div className="home_books">{
						this.state.books.map((book, idx) => <Book
							bookId={ book._id }
							title={ book.name }
							author={ book.author }
							coverImg={ bsBackendUrl + `uploads/${book._id}.jpg` }
							key={ idx }
						/>)
					}</div>
					: "There's no books right now, maybe come back later. :)"
				}
			</div>
		)
	}
}
