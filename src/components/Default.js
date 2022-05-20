import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import ThemeContext from "../contexts/ThemeContext";
import QuestionMark from "../constants/icons/QuestionMark";
import style from "../styles/default.module.scss";

function Default() {
	const { handleNewGame } = useContext(GameContext);
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`${style.default} ${theme ==="dark" ? style.dark : ""}`} onClick={handleNewGame}><QuestionMark size={320} color={theme ==="dark" ? "white" : "black"}/> </div>
	);
}

export default Default;