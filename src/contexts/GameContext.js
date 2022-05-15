/* eslint-disable react/prop-types */
import React, { createContext, useState, useEffect } from "react";

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

	useEffect(() => {
		const interval = setInterval(() =>{
			if(!loading) return;
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
				if(panelDifficulty === "easy") {
					setGameTime(30);
				} else if(panelDifficulty === "medium") {
					setGameTime(60);
				}
				else if(panelDifficulty === "hard") {
					setGameTime(90);
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
		handleStart
	};

	return (
		<GameContext.Provider value={values}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;


