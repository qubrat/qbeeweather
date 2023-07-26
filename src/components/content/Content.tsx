import Highlights from "./card-highlights";
import CardNow from "./card-now";

export default function Content() {
	return (
		<div className="flex flex-col gap-4 py-2 md:gap-8 md:flex-row md:justify-between">
			<div className="w-full md:w-4/12 xl:w-3/12">
				<CardNow />
			</div>
			<div className="w-full md:w-8/12 xl:w-9/12">
				<Highlights />
			</div>
		</div>
	);
}
