import React, { useContext } from "react";
import GameContext from "../contexts/GameContext";
import ThemeContext from "../contexts/ThemeContext";
import Close from "../constants/icons/Close";
import style from "../styles/panel.module.scss";

function Panel() {
	const { panelDifficulty, handleDifficultyChange, panelMode, handleModeChange, handleStart, loading, countDown, handleClosePanel } = useContext(GameContext);
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`${style.panel} ${theme ==="dark" && style.dark}`}>
			<div className={`${style.content} ${theme ==="dark" && style.dark}`}>
				<nav>
					<button className={theme ==="dark" && style.dark} onClick={handleClosePanel}><Close color={theme === "dark" ? "#fff": "#000" }/></button>
				</nav>
				<div className={style.gameplay}>
					<div className={style.title}>How to play?</div>
					<span>
						Click on the cards to see if you can find the matching pairs.
					</span>
					<span>
						The game is over when all the cards are matched or time is up.
					</span>
				</div>
				<div className={style.difficulty}>
					<div className={style.title}>Select Difficulty</div>
					<div className={style.buttons}>
						<button className={`${panelDifficulty === "easy" ? "" : style.notSelected } ${theme ==="dark" && style.dark}`} onClick={()=>handleDifficultyChange({type: "easy"})}>Easy</button>
						<button className={`${panelDifficulty === "medium" ? "" : style.notSelected } ${theme ==="dark" && style.dark}`} onClick={()=>handleDifficultyChange({type: "medium"})}>Medium</button>
						<button className={`${panelDifficulty === "hard" ? "" : style.notSelected } ${theme ==="dark" && style.dark}`} onClick={()=>handleDifficultyChange({type: "hard"})}>Hard</button>
					</div>
				</div>
				<div className={style.mode}>
					<div className={style.title}>Select Game Mode</div>
					<div className={style.buttons}>
						<button className={`${panelMode === "brands" ? "" : style.notSelected } ${theme ==="dark" && style.dark}`} onClick={()=>handleModeChange({type: "brands"})}>Brands</button>
						<button className={`${panelMode === "teams" ? "" : style.notSelected } ${theme ==="dark" && style.dark}`} onClick={()=>handleModeChange({type: "teams"})}>Teams</button>
					</div>
				</div>

				<button className={`${style.start} ${theme ==="dark" && style.dark}`} onClick={()=>handleStart()}>
					{
						loading ? `Loading... ${countDown}` : "Start" 
					}
				</button>
	
			</div>
		</div>
	);
}

export default Panel;