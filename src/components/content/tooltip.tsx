interface ITooltipProps {
	message: string | undefined;
	children: React.ReactNode;
}

export default function Tooltip({ message, children }: ITooltipProps) {
	return (
		<div className="relative flex group">
			{children}
			<span className="absolute p-1 text-xs text-green-900 transition-all bg-green-100 border border-green-700 rounded-md opacity-0 -translate-x-[90%] left-[90%] w-96 bottom-8 group-hover:opacity-100">
				{message}
			</span>
		</div>
	);
}
