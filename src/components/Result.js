import React,{ useContext}  from "react";
import GameContext from "../contexts/GameContext";
import Close from "../constants/icons/Close";
import style from "../styles/result.module.scss";

function Result() {
	const { gameScore, gameDifficulty, attemps,gameTime ,isSuccess , handleNewGame, handleResultClose} = useContext(GameContext);
	return (
		<div className={style.result}>
			<div className={style.content}>
				<nav>
					<button className={style.closeButton} onClick={handleResultClose}><Close color="#000" /></button>
				</nav>
				<div className={`${style.title} ${isSuccess ? style.success : style.fail}`}>
					{
						isSuccess ? "Success" : "Failed"
					}
				</div>
				<div className={style.info}>
					<div className={style.infoGroup}>
						Difficulty :  <span> { gameDifficulty }</span>
					</div>
					<div className={style.infoGroup}>
						Attemps :  <span> { attemps }</span>
					</div>
					<div className={style.infoGroup}>
						Time Left :  <span> { gameTime }</span>
					</div>
					<div className={style.infoGroup}>
						Score :  <span> { gameScore }</span>
					</div>
				</div>
				<button className={style.start} onClick={handleNewGame}>{isSuccess ? "New Game" : " Try Again"}</button>
			</div>
		</div>
	);
}

export default Result;