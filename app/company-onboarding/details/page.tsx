"use client";

import { useRouter } from "next/navigation";

import {
	BackSvg,
	FormButton,
	IconSelectInput,
	LocationSelectSvg,
	MultipleSelectInput,
	PageIntro,
	SelectInput,
	TextArea,
	TimezoneSelectSvg,
} from "@/appComponents";

const CompanyOnboardingDetails = () => {
	const router = useRouter();

	return (
		<div className="max-w-gridMax w-full">
			<PageIntro
				step="2/4"
				heading="Details"
				subHeading="Provide additional information to help us find you better matches."
			/>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="space-y-6 mt-10 mb-4"
			>
				<TextArea />
				<SelectInput
					label="Industry"
					subLabel="What industry does your company operate in?"
					id="industry"
					name="industry"
					placeholder="Select"
					options={["technology", "game development", "finance"]}
				/>
				<IconSelectInput
					icon={<LocationSelectSvg />}
					label="Location"
					id="location"
					name="location"
					placeholder="Select location"
					options={["india", "japan", "united kingdom"]}
				/>
				<MultipleSelectInput />
				<IconSelectInput
					icon={<TimezoneSelectSvg />}
					label="Timezone"
					id="timezone"
					name="timezone"
					placeholder="Select timezone"
					options={[
						"(GMT-0) Greenwich Mean Time",
						"(GMT-1) Greenwich Mean Time",
						"(GMT-2) Greenwich Mean Time",
					]}
				/>
				<FormButton />
			</form>
			<button
				type="button"
				onClick={() => router.back()}
				className="font-medium flex items-center gap-2 py-1 px-4 leading-button tracking-subheading text-subheading hover:scale-95 transition ease-in-out duration-500"
			>
				<BackSvg /> Back
			</button>
		</div>
	);
};

export default CompanyOnboardingDetails;
