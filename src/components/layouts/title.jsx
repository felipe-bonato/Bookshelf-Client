import React from "react";

export default function Title(props) {
	return (
		<header className="title_con">
			<h1 className="title_main">{ props.text }</h1>
		</header>
	)
}
