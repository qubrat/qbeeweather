import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { useIsMobile } from "../../hooks/useIsMobile";

export default function CurrentLocation() {
	const { updateLocation } = useContext(LocationContext);
	const [error, setError] = useState<string | null>(null);

	const isMobile = useIsMobile();

	const getLocation = () => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					updateLocation(position.coords.latitude, position.coords.longitude);
					setError(null);
				},
				(error) => {
					setError(`Error getting location: ${error.message}`);
				}
			);
		} else {
			setError("Geolocation is not supported in this browser.");
		}
	};

	return (
		<button
			onClick={getLocation}
			className="flex flex-row p-3 transition duration-300 rounded-full lg:px-6 bg-brass-500 hover:bg-brass-400 hover:shadow-standard hover:shadow-brass-300/60"
		>
			<Icon icon="ph:crosshair-simple-duotone" className="w-6 h-6 text-white sm:mr-2" />
			{!isMobile && <span className="text-white">Current&nbsp;location</span>}
		</button>
	);
}
