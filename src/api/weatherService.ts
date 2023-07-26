import SETTINGS from "../config/settings";

const convertToTime = (time: number) => {
	const date = new Date(time * 1000);
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${date.getHours()}:${minutes}`;
};

export async function getCurrentWeather(lat: number, lon: number) {
	try {
		const response = await fetch(`${SETTINGS.API_URL}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${SETTINGS.API_KEY}&units=metric`);
		const data = await response.json();
		return {
			weather: { temp: Math.round(data.main.temp), desc: data.weather[0].description, icon: data.weather[0].icon },
			highlights: { humidity: data.main.humidity, pressure: data.main.pressure, visibility: data.visibility, feelsLike: data.main.feels_like },
			sun: { sunrise: convertToTime(data.sys.sunrise), sunset: convertToTime(data.sys.sunset) },
		};
	} catch (err) {
		console.log(err);
		return {};
	}
}
