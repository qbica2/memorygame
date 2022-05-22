import React, { useContext, useState, useEffect } from "react";
import GameContext from "../contexts/GameContext";
import ThemeContext from "../contexts/ThemeContext";
import Card from "./Card";
import style from "../styles/cardlist.module.scss";

function CardList() {

	const { gameDifficulty, cardList, handleMatch, handleAttempsAndScore } = useContext(GameContext);
	const { theme } = useContext(ThemeContext);

	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			if(choiceOne.name === choiceTwo.name){
				handleAttempsAndScore();
				handleMatch(choiceOne.name);
				reset();
			}
			else {
				handleAttempsAndScore();
				setTimeout(() =>reset(), 600);
			}
		}

	},[choiceOne,choiceTwo]);

	const handleChoice = (card) => {
		if(choiceOne && choiceTwo){
			return;
		}
		console.log(card);
		if(choiceOne){
			if(choiceOne.id===card.id){
				alert("You already chose this card!");
				return;
			}else{
				setChoiceTwo(card);
			}
		} else{
			setChoiceOne(card);
		}
		
	};

	const reset = () => {
		setChoiceOne(null);
		setChoiceTwo(null);
	};

	

	return (
		<div className={`${style.container} ${gameDifficulty === "hard" && style.hard } ${gameDifficulty === "medium" && style.medium} 
		${gameDifficulty === "easy" && style.easy} ${theme ==="dark" ? style.dark : ""}`}>
			{	
				cardList.map((card,index) =>(
					<Card key={index} id={index} image={card.image} name={card.name} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.status} card={card}/>
				) )
					
			}
		</div>
	);
}

export default CardList;