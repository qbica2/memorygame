/* eslint-disable react/prop-types */
import React, { createContext, useState } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
	const [isPanelOpen, setIsPanelOpen] = useState(true);

	const values ={
		isPanelOpen,
		setIsPanelOpen
	};

	return (
		<GameContext.Provider value={values}>
			{children}
		</GameContext.Provider>
	);
};

export default GameContext;


