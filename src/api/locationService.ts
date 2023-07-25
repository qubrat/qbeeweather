import SETTINGS from "../config/settings";

export async function getLocationFromCityName(cityName: string) {
	try {
		const response = await fetch(`${SETTINGS.API_URL}/geo/1.0/direct?q=${cityName}&limit=3&appid=${SETTINGS.API_KEY}`);
		const data = await response.json();
		return { lat: data[0].lat, lon: data[0].lon };
	} catch (err) {
		console.log(err);
		return {};
	}
}

export async function getCityNameFromLocation(lat: number, lon: number) {
	try {
		const response = await fetch(`${SETTINGS.API_URL}/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=3&appid=${SETTINGS.API_KEY}`);
		const data = await response.json();
		return { name: data[0].name, country: data[0].country };
	} catch (err) {
		console.log(err);
		return {};
	}
}
