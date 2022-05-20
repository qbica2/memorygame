import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import ThemeContext from "../contexts/ThemeContext";
import Linkedin from "../constants/icons/Linkedin";
import Github from "../constants/icons/Github";
import Mail from "../constants/icons/Mail";
import style from "../styles/sidebar.module.scss";

function Sidebar() {

	const { isSidebarOpen } = useContext(GameContext);
	const { theme } = useContext(ThemeContext);

	return (
		<div className={`${style.sidebar} ${isSidebarOpen ? style.open : ""} ${theme ==="dark" && style.dark}`}>
			<div className={style.me}>
				<img src="https://picsum.photos/200" alt="me" />
				Kubilay Akdemir
			</div>
			<div className={style.connect}>
				<span>Connect With Me :</span>
				<div className={style.social}>
					<a href="https://www.linkedin.com/in/kubilay-akdemir/" rel="noreferrer" target="_blank"><Linkedin size={25}/></a>
					<a href="https://github.com/qbica2" rel="noreferrer" target="_blank"><Github size={25}/></a>
					<a href="mailto:kubidik27@gmail.com"><Mail size={25}/></a>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;