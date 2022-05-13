import React, { useContext } from "react";
import Layout from "./Layout";
import CardList from "./CardList";
import Panel from "./Panel";
import GameContext from "../contexts/GameContext";

function Game() {
	const { isPanelOpen } = useContext(GameContext);
	return (
		<>
			<Layout>	
				<CardList />
			</Layout>
			{
				isPanelOpen && (<Panel />)
			}
		</>
	);
}

export default Game;