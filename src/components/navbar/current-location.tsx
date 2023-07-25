import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";
import { LocationContext } from "../../context/LocationContext";

export default function CurrentLocation() {
	const { updateLocation } = useContext(LocationContext);
	const [error, setError] = useState<string | null>(null);

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
			className="flex flex-row p-3 px-6 transition duration-300 rounded-full bg-brass-500 hover:bg-brass-400 hover:shadow-standard hover:shadow-brass-300/60"
		>
			<Icon icon="ph:map-pin-line-duotone" className="w-6 h-6 mr-2 text-white" />
			<span className="text-white">Current location</span>
		</button>
	);
}
