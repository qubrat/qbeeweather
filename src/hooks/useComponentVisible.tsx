import { useState, useEffect, useRef } from "react";

interface ComponentVisibleState {
	ref: React.RefObject<HTMLDivElement>;
	isComponentVisible: boolean;
	setIsComponentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function useComponentVisible(initialIsVisible: boolean): ComponentVisibleState {
	const [isComponentVisible, setIsComponentVisible] = useState<boolean>(initialIsVisible);
	const ref = useRef<HTMLDivElement>(null);

	const handleClickPlace = (event: MouseEvent) => {
		//Handle click outside of component
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsComponentVisible(false);
		}
		//Handle click inside of component
		if (ref.current && ref.current.contains(event.target as Node)) {
			setIsComponentVisible(true);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickPlace, true);
		return () => {
			document.removeEventListener("click", handleClickPlace, true);
		};
	}, []);

	return { ref, isComponentVisible, setIsComponentVisible };
}
