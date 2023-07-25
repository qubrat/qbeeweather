import Highlights from "./card-highlights";
import CardNow from "./card-now";

export default function Content() {
	return (
		<div className="flex justify-between py-2 gap-8">
			<div className="w-3/12 max-w-4xl">
				<CardNow />
			</div>
			<div className="w-full">
				<Highlights />
			</div>
		</div>
	);
}
