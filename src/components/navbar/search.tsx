import { Icon } from "@iconify/react/dist/iconify.js";
import { useIsTablet } from "../../hooks/useIsMobile";
import { getLocationsListFromCityName } from "../../api/locationService";
import { useContext, useEffect, useState } from "react";
import Spinner from "../content/spinner";
import { LocationContext } from "../../context/LocationContext";
import useComponentVisible from "../../hooks/useComponentVisible";

interface ILocation {
	lat: number;
	lon: number;
	name: string;
	country: string;
	state: string;
}

export default function Search() {
	const isTablet = useIsTablet();
	const { ref, isComponentVisible } = useComponentVisible(true);

	const { updateLocation } = useContext(LocationContext);

	const [loading, setLoading] = useState<boolean>(false);
	const [locations, setLocations] = useState<ILocation[]>([]);
	const [inputValue, setInputValue] = useState<string>("");
	const [searchResultsShown, setSearchResultsShown] = useState<boolean>(false);

	const [mobileSearchShown, setMobileSearchShown] = useState<boolean>(false);

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		const { value } = e.target;
		setInputValue(value);
	};

	const onLocationClick = (location: ILocation) => {
		updateLocation(location.lat, location.lon);
		setLocations([]);
		setMobileSearchShown(false);
	};

	const bottomRadius = () => {
		if (searchResultsShown) {
			return "rounded-tl-3xl rounded-tr-3xl";
		} else {
			return "rounded-full";
		}
	};

	useEffect(() => {
		if (locations.length > 0 && isComponentVisible && !isTablet) {
			setSearchResultsShown(true);
		} else {
			setSearchResultsShown(false);
		}
	}, [locations, isComponentVisible]);

	useEffect(() => {
		const delay = 300;
		const timeoutId = setTimeout(async () => {
			// Perform action with the debounced input value
			try {
				setLoading(true);
				if (inputValue.length > 0) {
					const locations = await getLocationsListFromCityName(inputValue);
					setLocations(locations);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}, delay);

		return () => clearTimeout(timeoutId);
	}, [inputValue]);

	return (
		<div className="relative lg:w-1/4" ref={ref}>
			<div
				className={`fixed bottom-0 left-0 w-full h-full bg-green-100 ${
					mobileSearchShown ? "translate-y-0" : "-translate-y-full"
				} transition-transform duration-300 ease-in-out`}
			>
				<div className="flex items-center justify-between py-2 bg-white">
					<button type="button" className="p-4" onClick={() => setMobileSearchShown(false)}>
						<Icon icon="ph:arrow-bend-up-left-bold" className="w-6 h-6 text-green-800 "></Icon>
					</button>
					<input
						type="search"
						placeholder="Search for a city..."
						onChange={handleChange}
						className="w-full p-4 pl-0 font-semibold text-green-800 bg-white focus:outline-none placeholder:text-green-600"
					/>
					{loading && (
						<div className="flex items-center p-4 pointer-events-none">
							<Spinner size="small" color="green-500" />
						</div>
					)}
				</div>
				{locations.length > 0 && (
					<div className="w-full bg-green-100 cursor-pointer top-12">
						{locations.map((location, index) => {
							return (
								<div
									key={index}
									onClick={() => onLocationClick(location)}
									className="flex items-center justify-start w-full p-4 transition-colors duration-200 first:border-t first:border-t-green-500 hover:bg-white"
								>
									<Icon icon="ph:map-pin-duotone" className="w-6 h-6 mr-4 text-green-600" />
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
			<button
				type="button"
				className="p-3 bg-white rounded-full lg:bg-transparent lg:pointer-events-none lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:items-center"
				onClick={() => setMobileSearchShown(true)}
				disabled={!isTablet}
			>
				<Icon icon="ph:magnifying-glass-duotone" className="w-6 h-6 text-green-800" />
			</button>
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
				<div className="absolute inset-y-0 right-0 flex items-center p-3 pointer-events-none">
					<Spinner size="small" color="green-500" />
				</div>
			)}

			{searchResultsShown && locations.length > 0 && (
				<div className="absolute z-10 w-full bg-white cursor-pointer top-12 rounded-bl-3xl rounded-br-3xl shadow-standard shadow-green-500/60">
					{locations.map((location, index) => {
						return (
							<div
								key={index}
								onClick={() => onLocationClick(location)}
								className="flex items-center justify-start w-full py-2 transition-colors duration-200 first:border-t first:border-t-green-500 last:rounded-bl-3xl last:rounded-br-3xl hover:bg-green-100"
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
