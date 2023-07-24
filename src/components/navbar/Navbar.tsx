import Search from "./search";
import CurrentLocation from "./current-location";
import Logo from "./logo";

export default function Navbar() {
	return (
		<div className="flex justify-between py-4 pb-10">
			<Logo />
			<Search />
			<CurrentLocation />
		</div>
	);
}
