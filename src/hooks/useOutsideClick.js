import { useEffect } from "react";

const useOutsideClick = (ref,ref2, callback) => {
	const handle = e => {
		if (ref?.current && !ref?.current.contains(e.target) && ref2?.current && !ref2?.current.contains(e.target)) {
			callback();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handle);

		return () => {
			document.removeEventListener("click", handle);
		};
	});
};

export default useOutsideClick;