/* eslint-disable no-unused-vars */
import React, {useState} from "react";
import style from "../styles/card.module.scss";
import QuestionMark from "../constants/icons/QuestionMark";


// eslint-disable-next-line react/prop-types
function Card({ id, image }) {
	const [isFlipped, setIsFlipped] = useState(false);

	return (
		<div className={`${style.card} ${isFlipped ? style.flipped : ""}`}  onClick={()=>setIsFlipped(!isFlipped)}>
			<img src={image} alt={id} />
			<div className={style.default}>
				<QuestionMark />
			</div>
		</div>
	);
}

export default Card;