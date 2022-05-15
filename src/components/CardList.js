import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import cardArray from "../constants/data/cardArray";
import Card from "./Card";
import style from "../styles/cardlist.module.scss";


function CardList() {
	const { gameDifficulty, gameMode } = useContext(GameContext);
	return (
		<div className={`${style.container} ${gameDifficulty === "hard" && style.hard } ${gameDifficulty === "medium" && style.medium} 
		${gameDifficulty === "easy" && style.easy}`}>
			{
				gameMode === "brands" &&  cardArray.slice(0,24).map((card) =>(
					<Card key={card.id} id={card.id} image={card.image} />
				) )
			}
			{
				gameMode === "teams" &&  "teams yok"
			}
			{/* {
				cardArray.map((card) =>(
					<Card key={card.id} id={card.id} image={card.image} />
				) )
			} */}
		</div>
	);
}

export default CardList;