import { Icon } from "@iconify/react";

export default function Logo() {
	return (
		<div className="flex flex-row items-center">
			<Icon icon="fluent-emoji-high-contrast:honeybee" className="text-5xl text-brass-500" />
			<span className="text-3xl font-semibold align-baseline ">qBee Weather</span>
		</div>
	);
}
