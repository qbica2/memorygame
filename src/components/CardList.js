import React from "react";
import cardArray from "../constants/data/cardArray";
import Card from "./Card";
import style from "../styles/cardlist.module.scss";


function CardList() {
	return (
		<div className={`${style.container} ${style.hard}`}>
			{
				cardArray.map((card) =>(
					<Card key={card.id} id={card.id} image={card.image} />
				) )
			}
		</div>
	);
}

export default CardList;