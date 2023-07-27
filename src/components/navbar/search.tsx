import { Icon } from "@iconify/react/dist/iconify.js";
import { useIsTablet } from "../../hooks/useIsMobile";
import { getLocationsListFromCityName } from "../../api/locationService";
import { useContext, useEffect, useState } from "react";
import Spinner from "../content/spinner";
import { LocationContext } from "../../context/LocationContext";

interface ILocation {
	lat: number;
	lon: number;
	name: string;
	country: string;
	state: string;
}

export default function Search() {
	const isTablet = useIsTablet();

	const { updateLocation } = useContext(LocationContext);

	const [loading, setLoading] = useState<boolean>(false);
	const [locations, setLocations] = useState<ILocation[]>([]);
	const [inputValue, setInputValue] = useState<string>("");

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { value } = e.target;
		setInputValue(value);
	};

	const onLocationClick = (location: ILocation) => {
		updateLocation(location.lat, location.lon);
		setLocations([]);
	};

	const bottomRadius = () => {
		if (locations.length > 0) {
			return "rounded-tl-3xl rounded-tr-3xl";
		} else {
			return "rounded-full";
		}
	};

	useEffect(() => {
		const delay = 300; // Adjust the delay value as per your requirement
		const timeoutId = setTimeout(async () => {
			// Perform any action you want with the debounced input value
			try {
				setLoading(true);
				const response = await getLocationsListFromCityName(inputValue);
				setLocations(response);
				console.log(inputValue);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}, delay);

		return () => clearTimeout(timeoutId);
	}, [inputValue]);

	return (
		<div className="relative lg:w-1/4">
			<div className="p-3 bg-white rounded-full lg:bg-transparent lg:pointer-events-none lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:items-center">
				<Icon icon="ph:magnifying-glass-duotone" className="w-6 h-6 text-green-800" />
			</div>
			{isTablet ? (
				<></>
			) : (
				<input
					type="search"
					placeholder="Search for a city..."
					onChange={handleChange}
					className={`focus:outline-none font-semibold w-full p-3 pl-12 text-green-800 bg-white placeholder:text-green-600 ${bottomRadius()}`}
				/>
			)}
			{!isTablet && loading && (
				<div className="absolute inset-y-0 right-0 flex items-center p-3 pl-3 pointer-events-none">
					<Spinner size="small" color="green-500" />
				</div>
			)}
			{locations.length > 0 && (
				<div className="absolute z-10 w-full pb-4 bg-white border-t cursor-pointer border-t-green-500 top-12 rounded-bl-3xl rounded-br-3xl shadow-standard shadow-green-500/60">
					{locations.map((location, index) => {
						return (
							<div
								key={index}
								onClick={() => onLocationClick(location)}
								className="flex items-center justify-start w-full py-2 transition-colors duration-200 hover:bg-green-100"
							>
								<Icon icon="ph:map-pin-duotone" className="w-6 h-6 m-3 text-green-600" />
								<div className="w-full text-left">
									<span className="font-semibold text-green-600">{location.name}</span>
									<div className="text-sm text-green-500">
										<span>{location.state}</span> <span>{location.country}</span>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
		</div>
	);
}
