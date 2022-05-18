import React,{ useContext}  from "react";
import GameContext from "../contexts/GameContext";
import style from "../styles/result.module.scss";

function Result() {
	const { gameScore, gameDifficulty, attemps,gameTime ,isSuccess} = useContext(GameContext);
	return (
		<div className={style.result}>
			<div className={style.content}>
				<h1>oyun bitti	</h1>
				<h2>{gameScore}</h2>
				<h3>{gameDifficulty}</h3>
				<h3>{attemps}</h3>
				<h3>{gameTime}</h3>
				<h3>{isSuccess ? "Tebrikler" : "Oyunu kaybettin"}</h3>
			</div>
		</div>
	);
}

export default Result;