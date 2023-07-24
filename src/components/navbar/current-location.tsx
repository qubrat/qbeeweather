import { Icon } from "@iconify/react/dist/iconify.js";

export default function CurrentLocation() {
	return (
		<button className="bg-brass-500 rounded-full p-3 px-6 flex flex-row transition duration-300 hover:bg-brass-400 hover:shadow-standard hover:shadow-brass-300/60">
			<Icon icon="ph:map-pin-line-duotone" className="w-6 h-6 text-white mr-2" />
			<span className="text-white">Current loaction</span>
		</button>
	);
}
