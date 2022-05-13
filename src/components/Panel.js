import React from "react";
import style from "../styles/panel.module.scss";

function Panel() {
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
						<button className={style.notSelected}>Easy</button>
						<button className={style.notSelected}>Medium</button>
						<button>Hard</button>
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