type LinkInputProps = {
	label: string;
	id: string;
	name: string;
	placeholder: string;
	placeholderSymbol: string | React.ReactNode;
	type: string;
};

const LinkInput = ({
	label,
	id,
	name,
	placeholder,
	placeholderSymbol,
	type,
}: LinkInputProps) => {
	return (
		<div>
			<label
				htmlFor={id}
				className="font-medium text-sm leading-button tracking-step"
			>
				{label}
			</label>
			<div className="flex gap-2 items-center border border-noColor group focus:border-primary hover:border-primary min-w-minInput mt-2 px-3 rounded-input transition duration-500 ease">
				<span className="text-tertiary leading-button tracking-subheading">
					{placeholderSymbol}
				</span>
				<input
					type={type}
					id={id}
					name={name}
					className="w-full leading-button tracking-subheading bg-transparent placeholder:text-tertiary py-2.5 outline-none"
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default LinkInput;
