import { Icon } from "@iconify/react";

export default function Logo() {
	return (
		<div className="flex items-center">
			<Icon icon="fluent-emoji-high-contrast:honeybee" className="mr-1 text-5xl text-brass-500" />
			<span className="text-xl font-semibold ">qBee Weather</span>
		</div>
	);
}
