import React, { useContext } from "react";
import Layout from "./Layout";
import CardList from "./CardList";
import Panel from "./Panel";
import Result from "./Result";
import GameContext from "../contexts/GameContext";

function Game() {
	const { isPanelOpen, isResultOpen } = useContext(GameContext);
	return (
		<>
			<Layout>	
				<CardList />
			</Layout>
			{
				isPanelOpen && (<Panel />)
			}
			{
				isResultOpen && (<Result />)
			}
		</>
	);
}

export default Game;