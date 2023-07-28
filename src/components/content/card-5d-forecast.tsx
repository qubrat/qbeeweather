import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { get5dForecast } from "../../api/weatherService";

interface IForecastProps {
	temp: string;
	icon: string;
	date: string;
	weekday: string;
	time?: number;
}

async function getWeatherIcon(icon: string) {
	const response = await import(`../../assets/weather_icons/${icon}.png`);
	return response.default;
}

function ForecastItem({ temp, icon, date, weekday }: IForecastProps) {
	const [weatherIcon, setWeatherIcon] = useState<string | undefined>();

	useEffect(() => {
		const getIcon = async () => {
			const response = await getWeatherIcon(icon);
			setWeatherIcon(response);
		};
		getIcon();
	}, [icon]);

	return (
		<div className="flex items-center justify-between w-full">
			<div className="flex items-center w-1/3 gap-2 mr-[8%]">
				<img src={weatherIcon} alt=":(" className="w-10 md:w-8 lg:w-10" />
				<span className="text-2xl lg:text-3xl">{temp}°</span>
			</div>
			<div className="w-1/4 text-sm text-green-700 lg:text-base">{date}</div>
			<div className="w-1/3 text-sm text-right text-green-700 lg:text-base">{weekday}</div>
		</div>
	);
}

export default function Card5dForecast() {
	const [forecast, setForecast] = useState<IForecastProps[]>([]);

	const { lat, lon } = useContext(LocationContext);

	useEffect(() => {
		const getForecast = async () => {
			const response = await get5dForecast(lat, lon);
			setForecast(response);
		};
		getForecast();
	}, [lat, lon]);

	return (
		<div className="flex flex-col items-start justify-center w-full gap-4 p-8 text-green-800 bg-white rounded-3xl">
			{forecast.map((item, index) => (
				<ForecastItem key={index} temp={item.temp} icon={item.icon} date={item.date} weekday={item.weekday} />
			))}
		</div>
	);
}
