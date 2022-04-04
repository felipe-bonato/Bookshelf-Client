import React from "react";

export default function NavBarItem(props) {
	return (
        <div className="NavBar_item">
            <a href={ `/${props.name}` }>
                <img height="100%" src={`src/imgs/navbar/${ props.name }_${ props.selected ? "selected" : "unselected" }.svg`} alt={ capitalizeFirstLetter(props.name) }/>
            </a>
        </div>
	)
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}