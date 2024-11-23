"use client";

import * as React from "react";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { CancelSelectedSvg, DropDownSvg, LanguagesSelectSvg } from "./svgs";

const languages = [
	{
		value: "english",
		label: "English",
	},
	{
		value: "french",
		label: "French",
	},
	{
		value: "german",
		label: "German",
	},
];

const MultipleSelectInput = () => {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState<string[]>([]);

	const handleSetValue = (val: string) => {
		if (value.includes(val)) {
			value.splice(value.indexOf(val), 1);
			setValue(value.filter((item) => item !== val));
		} else {
			setValue((prevValue) => [...prevValue, val]);
		}
	};

	return (
		<div>
			<label
				htmlFor="languages"
				className="font-medium text-sm leading-button tracking-step"
			>
				Languages
			</label>
			<p className="mt-1 mb-2 text-subheading text-xs leading-button tracking-step">
				Select languages that you speak professionally
			</p>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						variant="outline"
						id="languages"
						role="combobox"
						aria-expanded={open}
						className="w-full justify-start gap-2 px-3 py-2.5 relative transition duration-500 ease focus:outline-none focus:border-primary hover:border-primary"
					>
						<LanguagesSelectSvg />
						<div className="flex gap-2 justify-start">
							{value?.length
								? value.map((val, i) => (
										<div
											key={i}
											className="flex items-center gap-1 px-3 py-badge leading-button tracking-step rounded-full text-sm border border-noColor"
										>
											{
												languages.find((language) => language.value === val)
													?.label
											}
											<CancelSelectedSvg onClick={() => handleSetValue(val)} />
										</div>
								  ))
								: "Select languages"}
						</div>
						<DropDownSvg className="ml-1 absolute inset-y-0 my-auto right-3 transition duration-500 ease" />
					</Button>
				</PopoverTrigger>
				<PopoverContent className="p-0">
					<Command>
						<CommandInput placeholder="Search languages" />
						<CommandEmpty>No language found.</CommandEmpty>
						<CommandList>
							<CommandGroup>
								<CommandList>
									{languages.map((language) => (
										<CommandItem
											key={language.value}
											value={language.value}
											onSelect={() => {
												handleSetValue(language.value);
											}}
										>
											<Check
												className={cn(
													"mr-2 h-4 w-4",
													value.includes(language.value)
														? "opacity-100"
														: "opacity-0",
												)}
											/>
											{language.label}
										</CommandItem>
									))}
								</CommandList>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		</div>
	);
};

export default MultipleSelectInput;
