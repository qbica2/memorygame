import React, { useContext, useRef } from "react";
import style from "../styles/layout.module.scss";
import GameContext from "../contexts/GameContext";
import ThemeContext from "../contexts/ThemeContext";
import Statistic from "../constants/icons/Statistic";
import Sun from "../constants/icons/Sun";
import Moon from "../constants/icons/Moon";
import Contact from "../constants/icons/Contact";
import Start from "../constants/icons/Start";
import Sidebar from "./Sidebar";
import StatisticsPanel from "./StatisticsPanel";
import useOutsideClick from "../hooks/useOutsideClick";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
	const { gameTime, gameScore, gameDifficulty, attemps, handleNewGame, handleSidebarOpen, isGameStarted, handleStatisticsOpen,setIsSidebarOpen, setIsStatisticsOpen } = useContext(GameContext);
	const { theme, handleSetTheme } = useContext(ThemeContext);

	const sidebarRef = useRef();
	const sidebarButtonRef = useRef();
	const statisticsRef = useRef();
	const statisticsButtonRef = useRef();

	useOutsideClick(sidebarRef, sidebarButtonRef, () => {
		setIsSidebarOpen(false);
	});

	useOutsideClick(statisticsRef, statisticsButtonRef, () => {
		setIsStatisticsOpen(false);
	});

	
	return (
		<div className={`${style.layout} ${theme ==="dark" ? style.dark : ""}`}>
			<div className={style.nav}>
				<div className={style.left}>
					<button ref={sidebarButtonRef} className={theme ==="dark" ? style.dark : ""} onClick={handleSidebarOpen}><Contact size={24} color={theme === "dark" ? "#fff": "#030303" }/></button>
					<button className={theme ==="dark" ? style.dark : ""} onClick={handleNewGame}><Start size={24} color={theme === "dark" ? "#fff": "#030303" } /></button>
				</div>
				<div className={style.right}>
					<button ref={statisticsButtonRef} className={theme ==="dark" ? style.dark : ""} onClick={handleStatisticsOpen}><Statistic width={36} height={24} color={theme === "dark" ? "#fff": "#030303" }/></button>
					<button className={theme ==="dark" ? style.dark : ""} onClick={handleSetTheme}>
						{
							theme === "light" ? 
								<Moon width={24} height={24} color="#3C3C3C"/> 
								: 
								<Sun width={24} height={24} color="white"/>
						}
					</button>
				</div>
			</div>
			<Sidebar ref={sidebarRef}/>
			<StatisticsPanel ref={statisticsRef} />
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