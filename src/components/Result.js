import React, { useContext }  from "react";
import GameContext from "../contexts/GameContext";
import ThemeContext from "../contexts/ThemeContext";
import Close from "../constants/icons/Close";
import style from "../styles/result.module.scss";

function Result() {

	const { gameScore, gameDifficulty, attemps,gameTime ,isSuccess , handleNewGame, handleResultClose} = useContext(GameContext);
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${style.result} ${theme ==="dark" ? style.dark : ""}`}>
			<div className={`${style.content} ${theme ==="dark" ? style.dark : ""}`}>
				<nav>
					<button className={`${style.closeButton} ${theme ==="dark" ? style.dark : ""}`} onClick={handleResultClose}><Close color={theme === "dark" ? "#fff": "#000" } /></button>
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
				<button className={`${style.start} ${theme ==="dark" ? style.dark : ""}`} onClick={handleNewGame}>{isSuccess ? "New Game" : " Try Again"}</button>
			</div>
		</div>
	);
}

export default Result;