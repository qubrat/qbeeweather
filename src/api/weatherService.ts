import SETTINGS from "../config/settings";

const convertToTime = (time: number) => {
	const date = new Date(time * 1000);
	const minutes = date.getMinutes().toString().padStart(2, "0");
	return `${date.getHours()}:${minutes}`;
};

const getHours = (time: number) => {
	const date = new Date(time * 1000);
	return date.getHours();
};

const convertToWeekday = (time: number) => {
	const date = new Date(time * 1000);
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[date.getDay()];
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

export async function get5dForecast(lat: number, lon: number) {
	try {
		const response = await fetch(`${SETTINGS.API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${SETTINGS.API_KEY}&units=metric`);
		const data = await response.json();
		return data.list
			.map((item: any) => {
				return {
					temp: Math.round(item.main.temp),
					icon: item.weather[0].icon,
					date: ((dateText: string) => dateText.split(" ")[0] + " " + dateText.split(" ")[1].substring(0, 3))(
						new Date(item.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "long" })
					),
					weekday: convertToWeekday(item.dt),
					time: getHours(item.dt),
				};
			})
			.filter((item: any) => {
				return item.time > 12 && item.time < 16;
			});
	} catch (err) {
		console.log(err);
		return [];
	}
}
