import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import Card from "./Card";
import style from "../styles/cardlist.module.scss";

function CardList() {
	const { gameDifficulty, cardList } = useContext(GameContext);

	return (
		<div className={`${style.container} ${gameDifficulty === "hard" && style.hard } ${gameDifficulty === "medium" && style.medium} 
		${gameDifficulty === "easy" && style.easy}`}>
			{
				cardList.map((card,index) =>(
					<Card key={index} id={index} image={card.image} />
				) )
			}
		</div>
	);
}

export default CardList;