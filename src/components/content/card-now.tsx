import { Icon } from "@iconify/react/dist/iconify.js";
import weather from "../../assets/weather_icons/04d.png";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { getCityNameFromLocation } from "../../api/locationService";
import { WeatherContext } from "../../context/WeatherContext";

export default function CardNow() {
	const { lat, lon, name, country, updateCity } = useContext(LocationContext);
	const { temp, desc, icon } = useContext(WeatherContext);
	const [weatherIcon, setWeatherIcon] = useState<string>(weather);

	const date = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

	useEffect(() => {
		const getCity = async () => {
			const response = await getCityNameFromLocation(lat, lon);
			updateCity(response.name, response.country);
		};
		const getWeatherIcon = async (icon: string) => {
			try {
				const response = await import(`../../assets/weather_icons/${icon}.png`);
				setWeatherIcon(response.default);
			} catch (error) {
				console.log(error);
			}
		};
		getCity();
		icon && getWeatherIcon(icon);
	}, [lat, lon, icon]);

	return (
		<div className="flex flex-col items-start justify-center w-full p-8 text-white bg-green-900 rounded-3xl">
			<p className="text-2xl ">Now</p>
			<div className="flex flex-row items-center justify-between w-full my-4">
				<span className="text-8xl ">
					{temp}
					<span className="align-top text-7xl">°c</span>
				</span>
				<img src={weatherIcon} alt="current-weather" className="h-20 ml-4" />
			</div>
			<p>{desc.charAt(0).toUpperCase() + desc.slice(1)}</p>
			<hr className="w-full my-4 border border-green-500" />
			<div className="align-bottom">
				<Icon icon="ph:calendar-blank-duotone" className="inline w-6 h-6" /> <span className="inline text-green-500">{date}</span>
			</div>
			<div className="align-bottom">
				<Icon icon="ph:map-pin-duotone" className="inline w-6 h-6" />{" "}
				<span className="inline text-green-500 align-bottom ">
					{name}, {country}
				</span>
			</div>
		</div>
	);
}
