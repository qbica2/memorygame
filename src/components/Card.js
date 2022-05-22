import React, { useContext, useState, useEffect}from "react";
import ThemeContext from "../contexts/ThemeContext";
import style from "../styles/card.module.scss";
import QuestionMark from "../constants/icons/QuestionMark";
import useWindowSize from "../hooks/useWindowSize";

// eslint-disable-next-line react/prop-types
function Card({ id, image , card , flipped, handleChoice}) {
	
	const { theme } = useContext(ThemeContext);
	const [width] = useWindowSize();

	const [questionMarkSize, setQuestionMarkSize] = useState(80);

	useEffect(() => {
		if(width<=600){
			setQuestionMarkSize(50);
		}
	},[width]);

	const handleClick = () => {
		handleChoice(card);
	};

	return (
		<div className={`${style.card} ${!flipped ? style.flipped : ""}`}  onClick={handleClick}>
			<img src={image} alt={id} />
			<div className={style.default}>
				<QuestionMark size={questionMarkSize} color={theme ==="dark" ? "white" : "black"}/>
			</div>
		</div>
	);
}

export default Card;