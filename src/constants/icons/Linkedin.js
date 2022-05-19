import React from "react";
import PropTypes from "prop-types";


function Linkedin({ size }) {
	return (
		<svg width={size} height={size} viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fillRule="evenodd" clipRule="evenodd" d="M8 72H64C68.4183 72 72 68.4183 72 64V8C72 3.58172 68.4183 0 64 0H8C3.58172 0 0 3.58172 0 8V64C0 68.4183 3.58172 72 8 72Z" fill="#007EBB"/>
			<path fillRule="evenodd" clipRule="evenodd" d="M62 62H51.3156V43.8021C51.3156 38.8128 49.4198 36.0245 45.4707 36.0245C41.1746 36.0245 38.9301 38.9261 38.9301 43.8021V62H28.6333V27.3333H38.9301V32.0029C38.9301 32.0029 42.026 26.2742 49.3826 26.2742C56.7357 26.2742 62 30.7645 62 40.0512V62ZM16.3493 22.794C12.8421 22.794 10 19.9297 10 16.397C10 12.8644 12.8421 10 16.3493 10C19.8566 10 22.697 12.8644 22.697 16.397C22.697 19.9297 19.8566 22.794 16.3493 22.794ZM11.0326 62H21.7694V27.3333H11.0326V62Z" fill="white"/>
		</svg>

	);
}

Linkedin.propTypes = {
	size: PropTypes.number
};

export default Linkedin;