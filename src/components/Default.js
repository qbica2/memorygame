import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import QuestionMark from "../constants/icons/QuestionMark";
import style from "../styles/default.module.scss";

function Default() {
	const { handleOpenPanel } = useContext(GameContext);
	return (
		<div className={style.default} onClick={handleOpenPanel}><QuestionMark size={320}/> </div>
	);
}

export default Default;