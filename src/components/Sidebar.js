import React, { useContext }from "react";
import GameContext from "../contexts/GameContext";
import style from "../styles/sidebar.module.scss";

function Sidebar() {

	const { isSidebarOpen } = useContext(GameContext);
	
	return (
		<div className={`${style.sidebar} ${isSidebarOpen ? style.open : ""}`}>Sidebar</div>
	);
}

export default Sidebar;