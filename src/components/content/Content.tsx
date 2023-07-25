import Highlights from "./card-highlights";
import CardNow from "./card-now";

export default function Content() {
	return (
		<div className="flex justify-between gap-8 py-2">
			<div className="w-3/12 max-w-4xl">
				<CardNow />
			</div>
			<div className="w-full">
				<Highlights />
			</div>
		</div>
	);
}
