import React from "react";
import style from "../styles/panel.module.scss";

function Panel() {
	return (
		<div className={style.panel}>
			<div className={style.content}>
				<h1>Memory Game</h1>
			</div>
		</div>
	);
}

export default Panel;