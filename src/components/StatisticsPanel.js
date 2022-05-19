import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import style from "../styles/statisticsPanel.module.scss";

function StatisticsPanel() {
	const { statistics, isStatisticsOpen } = useContext(GameContext);
	const winRate = Math.round((statistics.totalGameWon / statistics.totalGamePlayed) * 100);
	const easyWinRate = Math.round((statistics.totalEasyWon / statistics.totalEasyGames) * 100);
	const mediumWinRate = Math.round((statistics.totalMediumWon / statistics.totalMediumGames) * 100);
	const hardWinRate = Math.round((statistics.totalHardWon / statistics.totalHardGames) * 100);
	const highScore = Math.max(...statistics.scores);
	console.log(highScore);
	return (
		<div className={`${style.container} ${isStatisticsOpen ? style.open : ""}`}>
			<header>Statistics</header>
			<main>
				<section>
					<span>Total</span>
					<aside>
						<div className={style.group}>
							<h2>{statistics.totalGamePlayed}</h2>
							<span>Played</span>
						</div>
						<div className={style.group}>
							<h2>{statistics.totalGameWon}</h2>
							<span>Win</span>
						</div>
						<div className={style.group}>
							<h2>{winRate }</h2>
							<span>Win %</span>
						</div>
						<div className={style.group}>
							<h2>{highScore }</h2>
							<span>Record</span>
						</div>
					</aside>
				</section>
				<section>
					<span>Easy</span>
					<aside>
						<div className={style.group}>
							<h2>{statistics.totalEasyGames}</h2>
							<span>Played</span>
						</div>
						<div className={style.group}>
							<h2>{statistics.totalEasyWon}</h2>
							<span>Win</span>
						</div>
						<div className={style.group}>
							<h2>{easyWinRate }</h2>
							<span>Win %</span>
						</div>
						<div className={style.group}>
							<h2>{highScore }</h2>
							<span>Record</span>
						</div>
					</aside>
				</section>
				<section>
					<span>Medium</span>
					<aside>
						<div className={style.group}>
							<h2>{statistics.totalMediumGames}</h2>
							<span>Played</span>
						</div>
						<div className={style.group}>
							<h2>{statistics.totalMediumWon}</h2>
							<span>Win</span>
						</div>
						<div className={style.group}>
							<h2>{mediumWinRate }</h2>
							<span>Win %</span>
						</div>
						<div className={style.group}>
							<h2>{highScore }</h2>
							<span>Record</span>
						</div>
					</aside>
				</section>
				<section>
					<span>Hard</span>
					<aside>
						<div className={style.group}>
							<h2>{statistics.totalHardGames}</h2>
							<span>Played</span>
						</div>
						<div className={style.group}>
							<h2>{statistics.totalHardWon}</h2>
							<span>Win</span>
						</div>
						<div className={style.group}>
							<h2>{hardWinRate }</h2>
							<span>Win %</span>
						</div>
						<div className={style.group}>
							<h2>{highScore }</h2>
							<span>Record</span>
						</div>
					</aside>
				</section>
			</main>
		</div>
	);
}

export default StatisticsPanel;