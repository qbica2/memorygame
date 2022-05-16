/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect} from "react";
import GameContext from "../contexts/GameContext";
import Card from "./Card";
import style from "../styles/cardlist.module.scss";

function CardList() {

	const { gameDifficulty, cardList, setAttemps, handleMatch } = useContext(GameContext);

	const [choiceOne, setChoiceOne] = useState(null);
	const [choiceTwo, setChoiceTwo] = useState(null);

	useEffect(() => {
		if (choiceOne && choiceTwo) {
			if(choiceOne.name === choiceTwo.name){
				console.log("You found a match!");
				handleMatch(choiceOne.name);
				reset();
			}
			else {
				console.log("No match!");
				setTimeout(() =>reset(), 1000);
			}
		}

	},[choiceOne,choiceTwo]);

	const handleChoice = (card) => {
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
		setAttemps(x => x + 1);
	};

	

	return (
		<div className={`${style.container} ${gameDifficulty === "hard" && style.hard } ${gameDifficulty === "medium" && style.medium} 
		${gameDifficulty === "easy" && style.easy}`}>
			{
				cardList.map((card,index) =>(
					<Card key={index} id={index} image={card.image} name={card.name} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.status} card={card}/>
				) )
			}
		</div>
	);
}

export default CardList;