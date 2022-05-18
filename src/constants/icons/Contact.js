import React from "react";
import PropTypes from "prop-types";

function Contact({ size }) {
	return (
		<svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clipPath="url(#clip0_39_2)">
				<path d="M14.5 34C19.7467 34 24 29.7467 24 24.5C24 19.2533 19.7467 15 14.5 15C9.25329 15 5 19.2533 5 24.5C5 29.7467 9.25329 34 14.5 34Z" stroke="#030303" strokeWidth="4" strokeMiterlimit="10"/>
				<path d="M29 49C29.0344 47.0642 28.6872 45.1406 27.9781 43.3391C27.269 41.5376 26.2119 39.8934 24.8673 38.5004C23.5226 37.1075 21.9167 35.9931 20.1413 35.2209C18.3659 34.4487 16.4558 34.0338 14.52 34M0.999999 49C0.965552 47.0642 1.3128 45.1406 2.0219 43.3391C2.731 41.5376 3.78806 39.8934 5.13271 38.5004C6.47736 37.1075 8.08326 35.9931 9.85867 35.2209C11.6341 34.4487 13.5442 34.0338 15.48 34L0.999999 49Z" stroke="#030303" strokeWidth="4" strokeMiterlimit="10"/>
				<path d="M35 15H63" stroke="#030303" strokeWidth="4" strokeMiterlimit="10"/>
				<path d="M35 31H63" stroke="#030303" strokeWidth="4" strokeMiterlimit="10"/>
				<path d="M35 47H63" stroke="#030303" strokeWidth="4" strokeMiterlimit="10"/>
			</g>
			<defs>
				<clipPath id="clip0_39_2">
					<rect width="64" height="64" fill="white"/>
				</clipPath>
			</defs>
		</svg>

	);
}

Contact.propTypes = {
	size: PropTypes.number
};

export default Contact;