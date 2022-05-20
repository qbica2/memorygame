import React, { useContext }from "react";
import ThemeContext from "../contexts/ThemeContext";
import style from "../styles/card.module.scss";
import QuestionMark from "../constants/icons/QuestionMark";

// eslint-disable-next-line react/prop-types
function Card({ id, image , card , flipped, handleChoice}) {
	const { theme } = useContext(ThemeContext);
	
	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<div className={`${style.card} ${!flipped ? style.flipped : ""}`}  onClick={handleClick}>
			<img src={image} alt={id} />
			<div className={style.default}>
				<QuestionMark size={80} color={theme ==="dark" ? "white" : "black"}/>
			</div>
		</div>
	);
}

export default Card;