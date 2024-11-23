"use client";

import { ChangeEvent, useState } from "react";

import { DropDownSvg } from "./svgs";

type SelectInputProps = {
	label?: string;
	id: string;
	name: string;
	placeholder: string;
	subLabel?: string;
	options: string[];
};

const SelectInput = ({
	label,
	id,
	name,
	placeholder,
	subLabel,
	options,
}: SelectInputProps) => {
	const [value, setValue] = useState("");

	const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setValue(e.target.value);
	};

	return (
		<div>
			{label && (
				<label
					htmlFor={id}
					className="font-medium text-sm leading-button tracking-step"
				>
					{label}
				</label>
			)}
			{subLabel && (
				<p className="mt-1 text-subheading text-xs leading-button tracking-step">
					{subLabel}
				</p>
			)}
			<div className="relative mt-2">
				<select
					id={id}
					name={name}
					onChange={handleSelectChange}
					className={`w-full peer leading-button tracking-subheading min-w-minInput bg-transparent border border-noColor rounded-input px-3 py-2.5 transition duration-500 ease focus:outline-none focus:border-primary hover:border-primary appearance-none cursor-pointer ${
						value ? "" : "text-tertiary"
					}`}
				>
					<option value="" hidden>
						{placeholder}
					</option>
					{options.map((option, i) => (
						<option key={i} className="capitalize text-primary" value={option}>
							{option}
						</option>
					))}
				</select>
				<DropDownSvg className="-z-10 ml-1 absolute inset-y-0 my-auto right-3 peer-focus-visible:rotate-180 transition duration-500 ease" />
			</div>
		</div>
	);
};

export default SelectInput;
