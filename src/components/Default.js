import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import QuestionMark from "../constants/icons/QuestionMark";
import style from "../styles/default.module.scss";

function Default() {
	const { handleNewGame } = useContext(GameContext);
	return (
		<div className={style.default} onClick={handleNewGame}><QuestionMark size={320}/> </div>
	);
}

export default Default;