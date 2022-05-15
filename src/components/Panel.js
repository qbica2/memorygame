import React, { useContext } from "react";
import GameContext from "../contexts/GameContext";
import style from "../styles/panel.module.scss";

function Panel() {
	const { panelDifficulty, handleDifficultyChange } = useContext(GameContext);
	
	return (
		<div className={style.panel}>
			<div className={style.content}>
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
						<button className={panelDifficulty === "easy" ? "" : style.notSelected } onClick={()=>handleDifficultyChange({type: "easy"})}>Easy</button>
						<button className={panelDifficulty === "medium" ? "" : style.notSelected } onClick={()=>handleDifficultyChange({type: "medium"})}>Medium</button>
						<button className={panelDifficulty === "hard" ? "" : style.notSelected } onClick={()=>handleDifficultyChange({type: "hard"})}>Hard</button>
					</div>
				</div>
				<div className={style.mode}>
					<div className={style.title}>Select Game Mode</div>
					<div className={style.buttons}>
						<button className={style.notSelected}>Brands</button>
						<button >Teams</button>
					</div>
				</div>
				
				<button className={style.start}>Start</button>
				
			</div>
		</div>
	);
}

export default Panel;