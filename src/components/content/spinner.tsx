interface ISpinnerProps {
	size: "standard" | "small" | "large";
	color?: string;
	styles?: string;
}

export default function Spinner({ size, color, styles }: ISpinnerProps) {
	const getSize = () => {
		switch (size) {
			case "small":
				return "h-6 w-6 border-2";
			case "standard":
				return "h-8 w-8 border-[3px]";
			case "large":
				return "h-12 w-12 border-4";
			default:
				return "h-6 w-6 border-2";
		}
	};

	return (
		<div
			className={`inline-block ${getSize()} animate-spin rounded-full border-solid border-${
				color ? color : "current"
			} border-r-transparent border-l-transparent align-[-0.125em] motion-reduce:animate-[spin_2s_linear_infinite] ${styles}`}
			role="status"
		>
			<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
		</div>
	);
}
