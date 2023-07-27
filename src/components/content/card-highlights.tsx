import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { fetchAirQuality } from "../../api/fetchHighlights";
import { IAirQuality } from "../../interfaces/highlights";
import { WeatherContext } from "../../context/WeatherContext";
import Spinner from "./spinner";
import Tooltip from "./tooltip";

interface IAirQualityProps {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const AirQuality = ({ setLoading }: IAirQualityProps) => {
	const { lat, lon } = useContext(LocationContext);
	const [airQuality, setAirQuality] = useState<IAirQuality | undefined>();

	useEffect(() => {
		const getAirQuality = async () => {
			const response = await fetchAirQuality(lat, lon);
			setAirQuality(response);
		};
		setLoading(true);
		try {
			getAirQuality();
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	}, [lat, lon]);

	return (
		<div className="p-4 bg-green-100 md:col-span-2 rounded-3xl">
			<span className="flex justify-between ">
				<span className="text-green-800">Air Quality Index</span>{" "}
				<Tooltip message={airQuality?.message}>
					<span className={`px-3 rounded-full cursor-help ${airQuality?.color}`}>{airQuality?.level}</span>
				</Tooltip>
			</span>
			<div className="flex items-center py-6">
				<Icon icon="ph:wind-duotone" className="inline w-12 h-12 mr-4 text-green-800" />
				<div className="grid flex-auto grid-cols-2 gap-2 xl:grid-cols-4">
					<div>
						<p className="text-green-800">PM2.5</p>
						<p className="text-3xl font-medium text-green-800">{airQuality ? airQuality.pm2_5 : "-"}</p>
					</div>
					<div>
						<p className="text-green-800">
							SO<span className="text-sm">2</span>
						</p>
						<p className="text-3xl font-medium text-green-800">{airQuality ? airQuality.so2 : "-"}</p>
					</div>
					<div>
						<p className="text-green-800">
							NO<span className="text-sm">2</span>
						</p>
						<p className="text-3xl font-medium text-green-800">{airQuality ? airQuality.no2 : "-"}</p>
					</div>
					<div>
						<p className="text-green-800">
							O<span className="text-sm">3</span>
						</p>
						<p className="text-3xl font-medium text-green-800">{airQuality ? airQuality.o3 : "-"}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

const Sun = () => {
	const { sunrise, sunset } = useContext(WeatherContext);

	return (
		<div className="p-4 text-left bg-green-100 md:col-span-2 rounded-3xl">
			<span className="text-green-800">Sunrise & Sunset</span>
			<div className="flex items-center py-6">
				<div className="flex flex-col items-center justify-start flex-1 gap-2 lg:gap-8 lg:flex-row">
					<Icon icon="ph:sun-horizon-duotone" className="w-12 h-12 text-green-800" />
					<div className="flex flex-col items-center justify-start">
						<p className="text-green-800">Sunrise</p>
						<p className="text-3xl font-medium text-green-800">{sunrise ? sunrise : "-"}</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-start flex-1 gap-2 lg:gap-8 lg:flex-row">
					<Icon icon="ph:moon-stars-duotone" className="w-12 h-12 text-green-800" />
					<div className="flex flex-col items-center justify-center">
						<p className="text-green-800">Sunset</p>
						<p className="text-3xl font-medium text-green-800">{sunset ? sunset : "-"}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

interface ISmallCardProps {
	title: string;
	icon: string;
	data: number | string;
	unit: string;
	top?: boolean;
}

const SmallCard = ({ title, icon, data, unit, top }: ISmallCardProps) => {
	return (
		<div className="p-4 text-left bg-green-100 rounded-3xl">
			<span className="text-green-800">{title}</span>
			<div className="flex items-center justify-between gap-4 my-2">
				<Icon icon={icon} className="w-10 h-10 text-green-800 md:w-12 md:h-12" />
				<span className="text-3xl font-medium text-green-800">
					{data ? data : "-"}
					<span className={`text-2xl ${top ? "align-top" : ""}`}>{unit}</span>
				</span>
			</div>
		</div>
	);
};

export default function Highlights() {
	const { humidity, pressure, visibility, feelsLike } = useContext(WeatherContext);
	const [loading, setLoading] = useState<boolean>(false);

	return (
		<div className="p-8 bg-white rounded-3xl">
			<div className="flex justify-between">
				<p className="mb-4 mr-4 text-2xl text-left text-green-800">Todays Highlights</p>
				{loading && <Spinner size="standard" color="green-600" />}
			</div>
			<div className="grid gap-6 xl:grid-cols-4">
				<AirQuality setLoading={setLoading} />
				<Sun />
				<SmallCard title="Humidity" icon="ph-drop-duotone" data={humidity} unit="%" />
				<SmallCard title="Pressure" icon="ph-waves-duotone" data={pressure} unit="hPa" />
				<SmallCard title="Visibility" icon="ph-eye-duotone" data={(visibility / 1000).toFixed(0)} unit="km" />
				<SmallCard title="Feels Like" icon="ph-thermometer-hot-duotone" data={Math.round(feelsLike)} unit="°c" top />
			</div>
		</div>
	);
}
