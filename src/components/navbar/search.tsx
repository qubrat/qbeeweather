import { Icon } from "@iconify/react/dist/iconify.js";

export default function Search() {
	return (
		<div className="relative">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
				<Icon icon="ph:magnifying-glass-duotone" className="w-6 h-6 text-green-900" />
			</div>
			<input
				type="search"
				placeholder="Search city..."
				className="w-96 p-3 pl-12 text-sm text-gray-900 rounded-full bg-gray-50 focus:ring-green-900 focus:border-green-900"
			/>
		</div>
	);
}
