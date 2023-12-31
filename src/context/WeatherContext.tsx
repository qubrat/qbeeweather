import React, { createContext, useContext, useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";
import { getCurrentWeather } from "../api/weatherService";

interface WeatherData {
	temp: number;
	desc: string;
	icon: string;
}

interface HighlightsData {
	humidity: number;
	pressure: number;
	visibility: number;
	feelsLike: number;
}

interface SunData {
	sunrise: string;
	sunset: string;
}

interface WeatherContextData extends WeatherData, HighlightsData, SunData {}

interface WeatherContextValue extends WeatherContextData {
	updateWeather: (weather: WeatherData, highlights: HighlightsData, sun: SunData) => void;
}

const WeatherContext = createContext<WeatherContextValue>({
	temp: 0,
	desc: "",
	icon: "",
	humidity: 0,
	pressure: 0,
	visibility: 0,
	feelsLike: 0,
	sunrise: "",
	sunset: "",
	updateWeather: () => {},
});

interface WeatherProviderProps {
	children: React.ReactNode;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const WeatherProvider = ({ children, setLoading }: WeatherProviderProps) => {
	const [weather, setWeather] = useState<WeatherContextData>({
		temp: 0,
		desc: "",
		icon: "",
		humidity: 0,
		pressure: 0,
		visibility: 0,
		feelsLike: 0,
		sunrise: "",
		sunset: "",
	});

	const updateWeather = (weather: WeatherData, highlights: HighlightsData, sun: SunData) => {
		setWeather({ ...weather, ...highlights, ...sun });
	};

	const { lat, lon } = useContext(LocationContext);

	useEffect(() => {
		const getWeather = async () => {
			const response = await getCurrentWeather(lat, lon);
			updateWeather(response.weather!, response.highlights!, response.sun!);
		};
		try {
			getWeather();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [lat, lon]);

	return <WeatherContext.Provider value={{ ...weather, updateWeather }}>{children}</WeatherContext.Provider>;
};

export { WeatherContext, WeatherProvider };
