type TextInputProps = {
	label: string;
	id: string;
	name: string;
	placeholder: string;
};

const TextInput = ({ label, id, name, placeholder }: TextInputProps) => {
	return (
		<>
			<label className="font-medium text-sm leading-button tracking-step">
				{label}
			</label>
			<input
				type="text"
				id={id}
				name={name}
				className="w-full mt-2 leading-button tracking-subheading min-w-minInput bg-transparent placeholder:text-tertiary border border-noColor rounded-input px-3 py-2.5 transition duration-500 ease focus:outline-none focus:border-primary hover:border-primary"
				placeholder={placeholder}
			/>
		</>
	);
};

export default TextInput;
