import React from "react";
import style from "../styles/layout.module.scss";

// eslint-disable-next-line react/prop-types
function Layout({children}) {
	return (
		<div className={style.layout}>
			<header className={style.hard}>
				<h1>Memory Game</h1>
				<nav>
					<span>Attemps: 10</span>
					<span>Time: 00:00</span>
					<span>Score: 0</span>
				</nav>
			</header>
			{children}
		</div>
	);
}

export default Layout;