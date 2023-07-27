import Search from "./search";
import CurrentLocation from "./current-location";
import Logo from "./logo";
import { useIsTablet } from "../../hooks/useIsMobile";

export default function Navbar() {
	const isTablet = useIsTablet();

	return (
		<div className="fixed top-0 right-0 z-10 flex justify-between w-full px-4 py-6 bg-green-100 lg:p-8">
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
