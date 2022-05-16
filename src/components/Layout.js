import React, { useContext } from "react";
import style from "../styles/layout.module.scss";
import GameContext from "../contexts/GameContext";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
	const { gameTime, gameScore, gameDifficulty, attemps } = useContext(GameContext);
	return (
		<div className={style.layout}>
			<header 
				className={`${gameDifficulty === "hard" && style.hard } 
				${gameDifficulty === "medium" && style.medium} 
				${gameDifficulty === "easy" && style.easy}`}>
				<h1>Memory Game</h1>
				<nav>
					<span>Attemps: {attemps}</span>
					<span>Time: {gameTime}</span>
					<span>Score: {gameScore}</span>
				</nav>
			</header>
			{children}
		</div>
	);
}

export default Layout;