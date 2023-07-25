import { Icon } from "@iconify/react/dist/iconify.js";

const AirQuality = () => {
	return (
		<div className="bg-green-100 p-4 rounded-3xl col-span-2">
			<span className="flex justify-between ">
				<span className="text-green-700">Air Quality Index</span> <span className="bg-success rounded-full px-3">Good</span>
			</span>
			<div className="flex gap-4 my-4 items-center justify-between">
				<Icon icon="ph:wind-duotone" className="text-green-900 w-12 h-12" />
				<div className="">
					<p className="text-green-700">PM2.5</p>
					<p className="text-green-900 font-medium text-3xl">3.90</p>
				</div>
				<div className="">
					<p className="text-green-700">
						SO<span className="text-sm">2</span>
					</p>
					<p className="text-green-900 font-medium text-3xl">7.75</p>
				</div>
				<div className="">
					<p className="text-green-700">
						NO<span className="text-sm">2</span>
					</p>
					<p className="text-green-900 font-medium text-3xl">33.6</p>
				</div>
				<div className="">
					<p className="text-green-700">
						O<span className="text-sm">3</span>
					</p>
					<p className="text-green-900 font-medium text-3xl">38.6</p>
				</div>
			</div>
		</div>
	);
};

const Sun = () => {
	return (
		<div className="bg-green-100 p-4 rounded-3xl col-span-2 text-left">
			<span className="text-green-700">Sunrise & Sunset</span>

			<div className="flex gap-4 my-4 items-center justify-between">
				<Icon icon="ph:sun-duotone" className="text-green-900 w-12 h-12" />
				<div className="">
					<p className="text-green-700">Sunrise</p>
					<p className="text-green-900 font-medium text-3xl">6:46 AM</p>
				</div>
				<div className="">
					<p className="text-green-700">Sunset</p>
					<p className="text-green-900 font-medium text-3xl">5:39 PM</p>
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
		<div className="bg-green-100 p-4 rounded-3xl text-left">
			<span className="text-green-700">{title}</span>
			<div className="flex gap-4 my-4 items-center justify-between">
				<Icon icon={icon} className="text-green-900 w-12 h-12" />
				<span className="text-green-900 font-medium text-3xl">
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
			<p className="text-xl mb-4 text-left">Todays Highlights</p>
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
