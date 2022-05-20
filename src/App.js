import React from "react";
import Game from "./components/Game";
import { GameProvider } from "./contexts/GameContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
	return (
		<ThemeProvider>
			<GameProvider>
				<Game />	
			</GameProvider>
		</ThemeProvider>
	);
}

export default App;
