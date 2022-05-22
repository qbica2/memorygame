import React, { useContext } from "react";
import GameContext from "../contexts/GameContext";
import Layout from "./Layout";
import CardList from "./CardList";
import Panel from "./Panel";
import Result from "./Result";
import Default from "./Default";

function Game() {

	const { isPanelOpen, isResultOpen, isGameStarted } = useContext(GameContext);

	return (
		<>
			<Layout>	
				{
					isGameStarted ? <CardList /> : <Default />
				}
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