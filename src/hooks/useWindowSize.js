import { useLayoutEffect, useState } from "react";

const useWindowSize = (w, h) => {
	const [width, setWidth] = useState(w);
	const [height, setHeight] = useState(h);

	useLayoutEffect(() => {
		const updateSize = () => {
			setWidth(window.innerWidth);
			setHeight(window.innerHeight);
		};

		updateSize();

		window.addEventListener("resize", updateSize);
		return () => window.addEventListener("resize", updateSize);
	}, []);

	return [width, height];
};

export default useWindowSize;