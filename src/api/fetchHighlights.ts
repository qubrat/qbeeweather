import SETTINGS from "../config/settings";

const getAQI = (aqi: number) => {
	switch (aqi) {
		case 1:
			return { color: "bg-airquality-good", text: "Good" };
		case 2:
			return { color: "bg-airquality-fair", text: "Fair" };
		case 3:
			return { color: "bg-airquality-moderate", text: "Moderate" };
		case 4:
			return { color: "bg-airquality-poor", text: "Poor" };
		case 4:
			return { color: "bg-airquality-verypoor", text: "Very Poor" };
		default:
			return { color: "bg-airquality-good", text: "Good" };
	}
};

export async function fetchAirQuality(lat: number, lon: number) {
	try {
		const response = await fetch(`${SETTINGS.API_URL}/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${SETTINGS.API_KEY}`);
		const data = await response.json();
		const aqi = getAQI(data.list[0].main.aqi);
		return { ...aqi, ...data.list[0].components };
	} catch (err) {
		console.log(err);
		return {};
	}
}
