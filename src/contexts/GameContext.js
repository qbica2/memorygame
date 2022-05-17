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
				setGameTime(gameTime - 1);
			} else{
				setGameTime(0);
				setIsGameStarted(false);
				handleEndGame();
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

	const handleEndGame = () => {
		console.log("oyun bitti");
		const isSuccess = cardList.every(card => card.status === true);
		console.log("isSuccess: ", isSuccess);
		setIsResultOpen(true);
	};

	const values ={
		isPanelOpen,
		setIsPanelOpen,
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
		handleEndGame,
		handleAttempsAndScore,
		isResultOpen,
	};

	return (
		<GameContext.Provider value={values}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;


