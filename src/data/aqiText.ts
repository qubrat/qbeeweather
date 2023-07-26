export const aqiText: {
	[key: number]: { level: string; color: string; message: string };
} = {
	1: {
		level: "Good",
		color: "bg-airquality-good",
		message: "Air quality is considered satisfactory, and air pollution poses little or no risk.",
	},
	2: {
		level: "Fair",
		color: "bg-airquality-fair",
		message:
			"Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.",
	},
	3: {
		level: "Moderate",
		color: "bg-airquality-moderate",
		message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected.",
	},
	4: {
		level: "Poor",
		color: "bg-airquality-poor",
		message: "Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects.",
	},
	5: {
		level: "Very Poor",
		color: "bg-airquality-verypoor",
		message: "Health alert: everyone may experience more serious health effects.",
	},
};
