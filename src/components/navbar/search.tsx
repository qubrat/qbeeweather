import { Icon } from "@iconify/react/dist/iconify.js";
import { useIsTablet } from "../../hooks/useIsMobile";

export default function Search() {
	const isTablet = useIsTablet();

	return (
		<div className="relative">
			<div className="p-3 bg-white rounded-full lg:bg-transparent lg:pointer-events-none lg:absolute lg:inset-y-0 lg:left-0 lg:flex lg:items-center lg:pl-3">
				<Icon icon="ph:magnifying-glass-duotone" className="w-6 h-6 text-green-900" />
			</div>
			{isTablet ? (
				<></>
			) : (
				<input
					type="search"
					placeholder="Search for a city"
					className="p-3 pl-12 text-sm text-gray-900 bg-white rounded-full w-96 focus:ring-green-900 focus:border-green-900"
				/>
			)}
		</div>
	);
}
