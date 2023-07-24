import Highlights from "./card-highlights";
import CardNow from "./card-now";

export default function Navbar() {
	return (
		<div className="flex justify-between py-2">
			<div className="max-w-4xl">
				<CardNow />
			</div>
			<Highlights />
		</div>
	);
}
