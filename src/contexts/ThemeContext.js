import React, { createContext, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({children}) => {

	const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


	const handleSetTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	const values = {
		theme,
		handleSetTheme
	};

	return (
		<ThemeContext.Provider value={values}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;