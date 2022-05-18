import React,{ useContext}  from "react";
import GameContext from "../contexts/GameContext";
import style from "../styles/result.module.scss";

function Result() {
	const { gameScore, gameDifficulty, attemps,gameTime ,isSuccess , handleNewGame} = useContext(GameContext);
	return (
		<div className={style.result}>
			<div className={style.content}>
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
				<button onClick={handleNewGame}>{isSuccess ? "New Game" : " Try Again"}</button>
			</div>
		</div>
	);
}

export default Result;