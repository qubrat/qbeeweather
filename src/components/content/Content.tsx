import Card5dForecast from "./card-5d-forecast";
import Highlights from "./card-highlights";
import CardNow from "./card-now";
import CardTodayForecast from "./card-today-forecast";

export default function Content() {
	return (
		<div className="flex flex-col gap-4 py-2 mt-20 md:gap-8 md:flex-row md:justify-between">
			<div className="flex flex-col w-full gap-4 md:w-6/12 xl:w-3/12">
				<CardNow />
				<p className="text-2xl font-semibold text-left text-green-800">5 Days Forecast</p>
				<Card5dForecast />
			</div>
			<div className="flex flex-col w-full gap-4 md:w-8/12 xl:w-9/12 md:h-[90vh] md:overflow-y-auto md:no-scrollbar">
				<Highlights />
				<p className="text-2xl font-semibold text-left text-green-800">Today at</p>
				<CardTodayForecast />
			</div>
		</div>
	);
}
