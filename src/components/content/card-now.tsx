import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { getCityNameFromLocation } from "../../api/locationService";
import { WeatherContext } from "../../context/WeatherContext";
import Spinner from "./spinner";

export default function CardNow() {
	const { lat, lon, name, country, updateCity } = useContext(LocationContext);
	const { temp, desc, icon } = useContext(WeatherContext);
	const [weatherIcon, setWeatherIcon] = useState<string | undefined>();
	const [loading, setLoading] = useState<boolean>(false);

	const date = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

	useEffect(() => {
		setLoading(true);
		const getCity = async () => {
			const response = await getCityNameFromLocation(lat, lon);
			updateCity(response.name, response.country);
		};
		const getWeatherIcon = async (icon: string) => {
			const response = await import(`../../assets/weather_icons/${icon}.png`);
			setWeatherIcon(response.default);
		};
		try {
			getCity();
			icon && getWeatherIcon(icon);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [lat, lon, icon]);

	useEffect(() => {
		setLoading(true);
	}, []);

	return (
		<div className="flex flex-col items-start justify-center p-8 text-white bg-gradient-to-br from-green-600 to-green-900 rounded-3xl">
			<p className="text-2xl ">Now</p>
			<div className="flex flex-row items-center justify-between w-full my-4">
				<span className="text-7xl md:text-6xl lg:text-8xl">
					{temp ? temp : "-"}
					<span className="text-6xl align-top md:text-5xl lg:text-7xl">°c</span>
				</span>
				{loading ? <Spinner size="large" /> : <img src={weatherIcon} alt="weather icon" className="w-20 md:w-16 lg:w-24" />}
			</div>
			<p>{desc ? desc.charAt(0).toUpperCase() + desc.slice(1) : "No data"}</p>
			<hr className="w-full my-4 border border-green-500" />
			<div className="align-bottom">
				<Icon icon="ph:calendar-blank-duotone" className="inline w-6 h-6 mr-1 text-green-400" />
				<span className="inline text-green-400">{date}</span>
			</div>
			<div className="align-bottom">
				<Icon icon="ph:map-pin-duotone" className="inline w-6 h-6 mr-1 text-green-400" />
				<span className="inline text-green-400 align-bottom ">
					{name}, {country}
				</span>
			</div>
		</div>
	);
}
