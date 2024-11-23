"use client";

import { ChangeEvent, useState } from "react";

const TextArea = () => {
	const [text, setText] = useState("");

	const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setText(e.target.value);
	};

	return (
		<div>
			<label
				htmlFor="message"
				className="font-medium text-sm leading-button tracking-step"
			>
				About company
			</label>
			<div className="relative mt-2 h-fit">
				<textarea
					rows={5}
					maxLength={100}
					id="message"
					className="h-full min-h-textarea w-full bg-transparent placeholder:text-tertiary border border-noColor text-blue-gray-700 outline-none rounded-input px-3 py-2 transition duration-500 ease focus:outline-none focus:border-primary hover:border-primary"
					placeholder="What does your company do?"
					onChange={handleChange}
				></textarea>
				<span className="absolute text-tertiary text-xs leading-button tracking-step bottom-3.5 right-3 inline-block">
					{text.length}/100
				</span>
			</div>
		</div>
	);
};

export default TextArea;
