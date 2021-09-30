import React from "react";

export default function Book(props) {
  return (
	<div className="bsHome_book">
		<a href={`/book/${ props.bookId }`}>
			<img src={`/uploads/${ props.coverImg }`} alt="" width="50%" />
		</a>
	</div>
  )
}
