/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";
import brandArray from "../constants/data/brandArray";
import teamArray from "../constants/data/teamArray";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
	const [isPanelOpen, setIsPanelOpen] = useState(true);
	const [panelDifficulty, setPanelDifficulty] = useState("");
	const [panelMode, setPanelMode] = useState("");
	const [isGameStarted, setIsGameStarted] = useState(false);
	const [gameDifficulty, setGameDifficulty] = useState("");
	const [gameMode, setGameMode] = useState("");
	const [gameTime, setGameTime] = useState(0);
	const [gameScore, setGameScore] = useState(0);
	const [countDown, setCountDown] = useState(5);
	const [loading, setLoading] = useState(false);
	const [cardList, setCardList] = useState([]);
	const [attemps, setAttemps] = useState(0);
	const [isResultOpen, setIsResultOpen] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isStatisticsOpen, setIsStatisticsOpen] = useState(false);
	const [statistics, setStatistics] = useState({
		totalGamePlayed: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalGamePlayed : 0,
		totalGameWon: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalGameWon : 0,
		totalGameLost: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalGameLost : 0,
		totalHardGames: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalHardGames : 0,
		totalMediumGames: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalMediumGames : 0,
		totalEasyGames: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalEasyGames : 0,
		totalHardWon: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalHardWon : 0,
		totalMediumWon: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalMediumWon : 0,
		totalEasyWon: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).totalEasyWon : 0,
		scores: localStorage.getItem("statistics") ? JSON.parse(localStorage.getItem("statistics")).scores : [],
	});


	useEffect(() => {
		const interval = setInterval(() =>{
			if(!loading) return;
			
			const randomBrandArray = brandArray.sort(() => 0.5 - Math.random());
			const randomTeamArray = teamArray.sort(() => 0.5 - Math.random());

			console.log("interval çalışıyor");
			console.log(countDown);
			if(countDown === 0 ) {
				setIsGameStarted(true);
				setLoading(false);
				setIsPanelOpen(false);
				clearInterval(interval);
			} else if(countDown === 1) {
				setGameDifficulty(panelDifficulty);
				setGameMode(panelMode);
				if(panelMode === "brands") {
					let selectedArray = [];
					if(panelDifficulty === "easy") {
						setGameTime(30);
						selectedArray = randomBrandArray.slice(0,6);
					} else if(panelDifficulty === "medium") {
						setGameTime(60);
						selectedArray = randomBrandArray.slice(0,10);
					}
					else if(panelDifficulty === "hard") {
						setGameTime(90);
						selectedArray = randomBrandArray.slice(0,12);
					}
					const newArr = [...selectedArray, ...selectedArray];
					const newArrWithId = newArr.map(item => ({...item, id: Math.random()}));
					setCardList(newArrWithId.sort(() => 0.5 - Math.random()));

				} else if(panelMode === "teams") {
					let selectedArray = [];
					if(panelDifficulty === "easy") {
						setGameTime(30);
						selectedArray = randomTeamArray.slice(0,6);
					} else if(panelDifficulty === "medium") {
						setGameTime(60);
						selectedArray = randomTeamArray.slice(0,10);
					}
					else if(panelDifficulty === "hard") {
						setGameTime(90);
						selectedArray = randomTeamArray.slice(0,12);
					}
					const newArr = [...selectedArray, ...selectedArray];
					const newArrWithId = newArr.map(item => ({...item, id: Math.random()}));
					setCardList(newArrWithId.sort(() => 0.5 - Math.random()));
				}
				setCountDown(x => x - 1);
			} else if( countDown > 0 ) {
				console.log("countdown değeri: ", countDown);
				setCountDown(x => x - 1);
			}
				
		}, 1000);	

		return () => {
			clearInterval(interval);
		};
	

	},[loading,countDown]);

	useEffect(() => {
		const timer = setInterval(() => {
			if(!isGameStarted) return;
			if(gameTime > 0){	
				const isSuccess = cardList.every(card => card.status === true);
				if(isSuccess) {
					console.log("success");

					const newStatistics = {
						totalGamePlayed : statistics.totalGamePlayed + 1,
						totalGameWon : statistics.totalGameWon + 1  ,
						totalGameLost : statistics.totalGameLost ,
						totalHardGames : gameDifficulty === "hard" ? statistics.totalHardGames + 1 : statistics.totalHardGames,
						totalMediumGames : gameDifficulty === "medium" ? statistics.totalMediumGames + 1 : statistics.totalMediumGames,
						totalEasyGames : gameDifficulty === "easy" ? statistics.totalEasyGames + 1 : statistics.totalEasyGames,
						totalHardWon: gameDifficulty === "hard" ? statistics.totalHardWon + 1 : statistics.totalHardWon,
						totalMediumWon: gameDifficulty === "medium" ? statistics.totalMediumWon + 1 : statistics.totalMediumWon,
						totalEasyWon: gameDifficulty === "easy" ? statistics.totalEasyWon + 1 : statistics.totalEasyWon,
						scores: [gameScore + gameTime, ...statistics.scores],
					};
					localStorage.setItem("statistics", JSON.stringify(newStatistics));
					setStatistics(newStatistics);
					setIsGameStarted(false);
					setGameScore(gameScore + gameTime);
					setPanelMode("");
					setPanelDifficulty("");
					setIsSuccess(true);
					clearInterval(timer);
					setIsResultOpen(true);
				}else {
					setGameTime(gameTime - 1);
				}


			} else{
				const newStatistics = {
					totalGamePlayed : statistics.totalGamePlayed + 1,
					totalGameWon : statistics.totalGameWon  ,
					totalGameLost : statistics.totalGameLost + 1,
					totalHardGames : gameDifficulty === "hard" ? statistics.totalHardGames + 1 : statistics.totalHardGames,
					totalMediumGames : gameDifficulty === "medium" ? statistics.totalMediumGames + 1 : statistics.totalMediumGames,
					totalEasyGames : gameDifficulty === "easy" ? statistics.totalEasyGames + 1 : statistics.totalEasyGames,
					totalHardWon: statistics.totalHardWon,
					totalMediumWon: statistics.totalMediumWon,
					totalEasyWon: statistics.totalEasyWon,
					scores: [gameScore , ...statistics.scores]
				};
				localStorage.setItem("statistics", JSON.stringify(newStatistics));
				setStatistics(newStatistics);
				setGameTime(0);
				setPanelMode("");
				setPanelDifficulty("");
				setIsGameStarted(false);
				setIsResultOpen(true);
				setIsSuccess(false);
				clearInterval(timer);
			}
		},1000);

		return () => {
			clearInterval(timer);
		};
	}, [isGameStarted, gameTime]);


	const handleDifficultyChange = (value) => {
		if(value.type===panelDifficulty) {
			setPanelDifficulty("");
		}else {
			setPanelDifficulty(value.type);
		}
	};

	const handleModeChange = (value) => {
		if(value.type===panelMode) {
			setPanelMode("");
		}else {
			setPanelMode(value.type);
		}
	};

	const handleStart = () => {
		if (panelMode === "" || panelDifficulty === "") {
			alert("Please select a difficulty and mode");
			return;
		}
		setGameScore(0);
		setAttemps(0);
		setLoading(true);
		console.log("starta bastın");	
	};

	const handleMatch = (name) => {
		setCardList(prev=> {
			return prev.map(card => {
				if (card.name === name) {
					return { ...card, status: true };
				} else {
					return card;
				}
			});
		});
		if(gameDifficulty === "easy") {
			setGameScore(gameScore + 30);
		} else if(gameDifficulty === "medium") {
			setGameScore(gameScore + 40);
		} else if(gameDifficulty === "hard") {
			setGameScore(gameScore + 50);
		}
	};

	const handleAttempsAndScore = () => {
		setAttemps(attemps + 1);
		setGameScore(gameScore - 5);
	};

	const handleNewGame = () => {
		if(isGameStarted){
			alert("Please finish the game first");
			return;
		}
		setIsResultOpen(false);
		setIsPanelOpen(true);
		setCountDown(5);
	};

	const handleClosePanel = () => {
		setIsPanelOpen(false);
	};

	const handleSidebarOpen = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleResultClose = () => {
		setIsResultOpen(false);
	};

	const handleStatisticsOpen = () => {
		setIsStatisticsOpen(!isStatisticsOpen);
	};


	const values ={
		isPanelOpen,
		panelDifficulty,
		handleDifficultyChange,
		panelMode,
		handleModeChange,
		isGameStarted,
		gameDifficulty,
		gameMode,
		gameTime,
		gameScore,
		setGameScore,
		countDown,
		loading,
		handleStart,
		cardList,
		attemps,
		setAttemps,
		handleMatch,
		handleAttempsAndScore,
		isResultOpen,
		isSuccess,
		handleNewGame,
		handleClosePanel,
		handleSidebarOpen,
		isSidebarOpen,
		handleResultClose,
		statistics,
		handleStatisticsOpen,
		isStatisticsOpen,
	};

	return (
		<GameContext.Provider value={values}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;