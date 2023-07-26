import { useEffect, useState } from "react";

const getIsMobile = () => window.innerWidth <= 640;

export function useIsMobile() {
	const [isMobile, setIsMobile] = useState(getIsMobile());

	useEffect(() => {
		const onResize = () => {
			setIsMobile(getIsMobile());
		};

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return isMobile;
}

const getIsTablet = () => window.innerWidth <= 1024;

export function useIsTablet() {
	const [isTablet, setIsTablet] = useState(getIsTablet());

	useEffect(() => {
		const onResize = () => {
			setIsTablet(getIsTablet());
		};

		window.addEventListener("resize", onResize);

		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return isTablet;
}
