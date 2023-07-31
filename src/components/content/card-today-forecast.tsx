import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { getTodayForecast } from "../../api/weatherService";

import { Icon } from "@iconify/react/dist/iconify.js";

async function getWeatherIcon(icon: string | undefined) {
	try {
		const response = await import(`../../assets/weather_icons/${icon}.png`);
		return response.default;
	} catch (error) {
		console.log(error);
		return undefined;
	}
}

interface IForecastProps {
	temp?: number;
	icon?: string;
	time: string;
	wind?: {
		speed: number;
		deg: number;
	};
}

const ForecastItem = ({ temp, icon, time }: IForecastProps) => {
	const [weatherIcon, setWeatherIcon] = useState<string | undefined>();

	useEffect(() => {
		const getIcon = async () => {
			const response = await getWeatherIcon(icon);
			setWeatherIcon(response);
		};
		getIcon();
	}, [icon]);

	return (
		<div className="min-w-[10rem] flex flex-col items-center flex-1 gap-2 p-2 py-4 font-semibold text-green-800 bg-white rounded-3xl">
			<p className="text-lg">{time}</p>
			<img src={weatherIcon} alt=":(" className="w-16" />
			<p className="text-lg">{temp}°</p>
		</div>
	);
};

const WindItem = ({ wind, time }: IForecastProps) => {
	return (
		<div className="min-w-[10rem] flex flex-col items-center flex-1 gap-2 p-2 py-4 font-semibold text-green-800 bg-white rounded-3xl">
			<p className="text-lg">{time}</p>
			{wind?.deg ? (
				<Icon icon="ph:navigation-arrow-fill" className="w-16 h-16 text-blue" style={{ rotate: `${wind?.deg + 45}deg` }} />
			) : (
				<p className="w-16">{":("}</p>
			)}

			<p className="text-lg">{wind?.speed} m/s</p>
		</div>
	);
};

export default function CardTodayForecast() {
	const [forecast, setForecast] = useState<IForecastProps[]>([]);

	const { lat, lon } = useContext(LocationContext);

	const weatherItems = forecast.map((item, index) => {
		return <ForecastItem key={index} temp={item.temp} icon={item.icon} time={item.time} />;
	});

	const windItems = forecast.map((item, index) => {
		return <WindItem key={index} wind={item.wind} time={item.time} />;
	});

	useEffect(() => {
		const getForecast = async () => {
			const response = await getTodayForecast(lat, lon);
			setForecast(response);
		};
		getForecast();
	}, [lat, lon]);

	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-4 overflow-x-auto">{weatherItems}</div>
			<div className="flex gap-4 overflow-x-auto">{windItems}</div>
		</div>
	);
}
