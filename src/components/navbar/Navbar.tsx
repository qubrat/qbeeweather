import Search from "./search";
import CurrentLocation from "./current-location";
import Logo from "./logo";
import { useIsTablet } from "../../hooks/useIsMobile";

export default function Navbar() {
	const isTablet = useIsTablet();

	return (
		<div className="flex justify-between pb-8">
			<Logo />
			{isTablet ? (
				<div className="flex gap-4">
					<Search />
					<CurrentLocation />
				</div>
			) : (
				<>
					<Search />
					<CurrentLocation />
				</>
			)}
		</div>
	);
}
