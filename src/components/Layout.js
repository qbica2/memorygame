import React, { useContext } from "react";
import style from "../styles/layout.module.scss";
import GameContext from "../contexts/GameContext";
import Statistic from "../constants/icons/Statistic";
import Setting from "../constants/icons/Setting";
import Contact from "../constants/icons/Contact";
import Start from "../constants/icons/Start";
import Sidebar from "./Sidebar";
import StatisticsPanel from "./StatisticsPanel";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
	const { gameTime, gameScore, gameDifficulty, attemps, handleNewGame, handleSidebarOpen, isGameStarted, handleStatisticsOpen } = useContext(GameContext);
	return (
		<div className={style.layout}>
			<div className={style.nav}>
				<div className={style.left}>
					<button onClick={handleSidebarOpen}><Contact size={24} color="#030303"/></button>
					<button onClick={handleNewGame}><Start size={24} color="black" /></button>
				</div>
				<div className={style.right}>
					<button onClick={handleStatisticsOpen}><Statistic width={36} height={24} color="black"/></button>
					<button><Setting/></button>
				</div>
			</div>
			<Sidebar />
			<StatisticsPanel />
			<header 
				className={`${gameDifficulty === "hard" && style.hard } 
				${gameDifficulty === "medium" && style.medium} 
				${gameDifficulty === "easy" && style.easy}`}>
				<h1>Memory Game</h1>
				{
					isGameStarted &&	
					<nav>
						<span>Attemps: {attemps}</span>
						<span>Time: {gameTime}</span>
						<span>Score: {gameScore}</span>
					</nav>
				}
			</header>
			{children}
		</div>
	);
}

export default Layout;