import React from "react";
import PropTypes from "prop-types";

function Moon({ width, height, color }) {
	return (
		<svg width={width} height={height} viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill={color} d="M24.551 48C31.9537 48 38.7147 44.632 43.1939 39.1133C43.8565 38.2969 43.134 37.1042 42.1099 37.2992C30.4659 39.5168 19.7729 30.5889 19.7729 18.8348C19.7729 12.0639 23.3974 5.83772 29.2883 2.48531C30.1964 1.96856 29.968 0.591844 28.9362 0.40125C27.4897 0.134525 26.0219 0.000219032 24.551 0C11.3033 0 0.551025 10.7354 0.551025 24C0.551025 37.2477 11.2864 48 24.551 48Z"/>
		</svg>

	);
}

Moon.propTypes = {
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired
};

export default Moon;