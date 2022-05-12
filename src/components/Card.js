import React from "react";
import style from "../styles/card.module.scss";


// eslint-disable-next-line react/prop-types
function Card({ id, image }) {
	return (
		<div className={style.card}>
			<img src={image} alt={id} />
		</div>
	);
}

export default Card;