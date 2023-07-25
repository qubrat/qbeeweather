import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../../context/LocationContext";
import { fetchAirQuality } from "../../api/fetchHighlights";
import { IAirQuality } from "../../interfaces/highlights";

const AirQuality = () => {
	const { lat, lon } = useContext(LocationContext);
	const [airQuality, setAirQuality] = useState<IAirQuality | undefined>();

	useEffect(() => {
		const getAirQuality = async () => {
			const response = await fetchAirQuality(lat, lon);
			setAirQuality(response);
		};
		getAirQuality();
	}, [lat, lon]);

	return (
		<div className="col-span-2 p-4 bg-green-100 rounded-3xl">
			<span className="flex justify-between ">
				<span className="text-green-700">Air Quality Index</span>{" "}
				<span className={`px-3 rounded-full ${airQuality?.color}`}>{airQuality?.text}</span>
			</span>
			<div className="flex items-center justify-between gap-4 my-4">
				<Icon icon="ph:wind-duotone" className="w-12 h-12 text-green-900" />
				<div className="">
					<p className="text-green-700">PM2.5</p>
					<p className="text-3xl font-medium text-green-900">{airQuality ? airQuality.pm2_5 : "-"}</p>
				</div>
				<div className="">
					<p className="text-green-700">
						SO<span className="text-sm">2</span>
					</p>
					<p className="text-3xl font-medium text-green-900">{airQuality ? airQuality.so2 : "-"}</p>
				</div>
				<div className="">
					<p className="text-green-700">
						NO<span className="text-sm">2</span>
					</p>
					<p className="text-3xl font-medium text-green-900">{airQuality ? airQuality.no2 : "-"}</p>
				</div>
				<div className="">
					<p className="text-green-700">
						O<span className="text-sm">3</span>
					</p>
					<p className="text-3xl font-medium text-green-900">{airQuality ? airQuality.o3 : "-"}</p>
				</div>
			</div>
		</div>
	);
};

const Sun = () => {
	return (
		<div className="col-span-2 p-4 text-left bg-green-100 rounded-3xl">
			<span className="text-green-700">Sunrise & Sunset</span>

			<div className="flex items-center justify-between gap-4 my-4">
				<Icon icon="ph:sun-duotone" className="w-12 h-12 text-green-900" />
				<div className="">
					<p className="text-green-700">Sunrise</p>
					<p className="text-3xl font-medium text-green-900">6:46 AM</p>
				</div>
				<div className="">
					<p className="text-green-700">Sunset</p>
					<p className="text-3xl font-medium text-green-900">5:39 PM</p>
				</div>
			</div>
		</div>
	);
};

interface ISmallCardProps {
	title: string;
	icon: string;
	data: number;
	unit: string;
	top?: boolean;
}

const SmallCard = ({ title, icon, data, unit, top }: ISmallCardProps) => {
	return (
		<div className="p-4 text-left bg-green-100 rounded-3xl">
			<span className="text-green-700">{title}</span>
			<div className="flex items-center justify-between gap-4 my-4">
				<Icon icon={icon} className="w-12 h-12 text-green-900" />
				<span className="text-3xl font-medium text-green-900">
					{data}
					<span className={`text-2xl ${top ? "align-top" : ""}`}>{unit}</span>
				</span>
			</div>
		</div>
	);
};

export default function Highlights() {
	return (
		<div className="w-full p-6 bg-white rounded-3xl">
			<p className="mb-4 text-2xl text-left">Todays Highlights</p>
			<div className="grid grid-cols-4 grid-rows-2 gap-6">
				<AirQuality />
				<Sun />
				<SmallCard title="Humidity" icon="ph-drop-duotone" data={82} unit="%" />
				<SmallCard title="Pressure" icon="ph-waves-duotone" data={1024} unit="hPa" />
				<SmallCard title="Visibility" icon="ph-eye-duotone" data={10} unit="km" />
				<SmallCard title="Feels Like" icon="ph-thermometer-hot-duotone" data={8} unit="°c" top />
			</div>
		</div>
	);
}
