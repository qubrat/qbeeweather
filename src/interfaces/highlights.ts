export interface IAirQuality {
	color: string;
	level: string;
	message?: string;
	co: number;
	no: number;
	no2: number;
	o3: number;
	so2: number;
	pm2_5: number;
	pm10: number;
	nh3: number;
}

export interface ISun {
	sunrise: string;
	sunset: string;
}
