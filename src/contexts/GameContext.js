/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
	const [isPanelOpen, setIsPanelOpen] = useState(true);
	const [panelDifficulty, setPanelDifficulty] = useState("");
	const [panelMode, setPanelMode] = useState("");

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

	const values ={
		isPanelOpen,
		setIsPanelOpen,
		panelDifficulty,
		handleDifficultyChange,
		panelMode,
		handleModeChange
	};

	return (
		<GameContext.Provider value={values}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;


