import { Icon } from "@iconify/react/dist/iconify.js";
import weather from "../../assets/weather_icons/04d.png";

export default function CardNow() {
	return (
		<div className="w-full text-white flex flex-col items-start justify-center p-6 bg-green-900 rounded-3xl">
			<p className="text-xl ">Now</p>
			<div className="flex flex-row items-center my-4">
				<span className=" text-6xl">
					5<span className="text-5xl align-top">°c</span>
				</span>
				<img src={weather} alt="current-weather" className="h-16 ml-16 w-auto" />
			</div>
			<p>Broken Clouds</p>
			<hr className="border border-green-500 w-full my-4" />
			<div className="align-bottom">
				<Icon icon="ph:calendar-blank-duotone" className="w-6 h-6 inline" /> <span className="inline text-green-500">Środa, 25 Lipca</span>
			</div>
			<div className="align-bottom">
				<Icon icon="ph:map-pin-duotone" className="w-6 h-6 inline" /> <span className="inline text-green-500">Poznań, PL</span>
			</div>
		</div>
	);
}
