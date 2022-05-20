import React, { useContext, useState, useEffect}from "react";
import GameContext from "../contexts/GameContext";
import ThemeContext from "../contexts/ThemeContext";
import style from "../styles/statisticsPanel.module.scss";

function StatisticsPanel() {

	const { theme } = useContext(ThemeContext);

	const { statistics, isStatisticsOpen } = useContext(GameContext);
	const [totalWinRate,setTotalWinRate] = useState(0);
	const [totalRecord,setTotalRecord] = useState(0);
	const [easyWinRate,setEasyWinRate] = useState(0);
	const [easyRecord,setEasyRecord] = useState(0);
	const [mediumWinRate,setMediumWinRate] = useState(0);
	const [mediumRecord,setMediumRecord] = useState(0);
	const [hardWinRate,setHardWinRate] = useState(0);
	const [hardRecord,setHardRecord] = useState(0);

	useEffect(() => {
		if(statistics.totalGamePlayed === 0) {
			setTotalWinRate(0);
			setTotalRecord(0);
			setEasyWinRate(0);
			setEasyRecord(0);
			setMediumWinRate(0);
			setMediumRecord(0);
			setHardWinRate(0);
			setHardRecord(0);
		}else{
			setTotalWinRate(Math.round((statistics.totalGameWon / statistics.totalGamePlayed) * 100));
			setTotalRecord(Math.max(...statistics.scores));

			if(statistics.totalEasyGames === 0) {
				setEasyWinRate(0);
				setEasyRecord(0);
			} else{
				setEasyWinRate(Math.round((statistics.totalEasyWon / statistics.totalEasyGames) * 100));
				setEasyRecord(Math.max(...statistics.easyScores));
			}

			if(statistics.totalMediumGames === 0) {
				setMediumWinRate(0);
				setMediumRecord(0);
			} else{
				setMediumWinRate(Math.round((statistics.totalMediumWon / statistics.totalMediumGames) * 100));
				setMediumRecord(Math.max(...statistics.mediumScores));
			}

			if(statistics.totalHardGames === 0) {
				setHardWinRate(0);
				setHardRecord(0);
			} else{
				setHardWinRate(Math.round((statistics.totalHardWon / statistics.totalHardGames) * 100));
				setHardRecord(Math.max(...statistics.hardScores));
			}

		}
	} , [statistics]);

	return (
		<div className={`${style.container} ${isStatisticsOpen ? style.open : ""} ${theme ==="dark" && style.dark}`}>
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
							<h2>{totalWinRate }</h2>
							<span>Win %</span>
						</div>
						<div className={style.group}>
							<h2>{totalRecord }</h2>
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
							<h2>{easyRecord }</h2>
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
							<h2>{mediumRecord }</h2>
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
							<h2>{hardRecord }</h2>
							<span>Record</span>
						</div>
					</aside>
				</section>
			</main>
		</div>
	);
}

export default StatisticsPanel;