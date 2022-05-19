import React from "react";
import style from "../styles/card.module.scss";
import QuestionMark from "../constants/icons/QuestionMark";

// eslint-disable-next-line react/prop-types
function Card({ id, image , card , flipped, handleChoice}) {
	
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<div className={`${style.card} ${!flipped ? style.flipped : ""}`}  onClick={handleClick}>
			<img src={image} alt={id} />
			<div className={style.default}>
				<QuestionMark size={80}/>
			</div>
		</div>
	);
}

export default Card;