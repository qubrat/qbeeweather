import SETTINGS from "../config/settings";
import { aqiText } from "../data/aqiText";

export async function fetchAirQuality(lat: number, lon: number) {
	try {
		const response = await fetch(`${SETTINGS.API_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${SETTINGS.API_KEY}`);
		const data = await response.json();
		return { ...aqiText[data.list[0].main.aqi], ...data.list[0].components };
	} catch (err) {
		console.log(err);
		return {};
	}
}
