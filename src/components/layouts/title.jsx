import React from "react";

export default function Title(props) {
	return (
		<header className="title_con">
			<h1 className="title_main">{ props.main }</h1>
			{ props.subtitle ? <h3 className="Title_sub">{ props.sub } </h3> : '' }
		</header>
	)
}
