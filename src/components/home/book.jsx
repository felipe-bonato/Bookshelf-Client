import React from "react";

export default function Book(props) {
  return (
	<div className="home_book">
		<a href={`/book/${ props.bookId }`}>
			<img src={ props.coverImg } alt="" width="50%" />
		</a>
	</div>
  )
}
