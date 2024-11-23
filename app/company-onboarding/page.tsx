import {
	IconSelectInput,
	LinkInput,
	SelectInput,
	TextInput,
	WebsiteInputSvg,
	TextArea,
	LocationSelectSvg,
	MultipleSelectInput,
} from "@/appComponents";

const CompanyOnboarding = () => {
	return (
		<div className="max-w-gridMax w-full">
			{/* <TextInput
				label="Company name"
				name="companyName"
				id="companyName"
				placeholder="Acme Inc."
			/>
			<LinkInput
				label="LinkedIn profile"
				name="username"
				id="username"
				type="text"
				placeholder="username"
				placeholderSymbol="linkedin.com/"
			/>
			<LinkInput
				label="Website"
				name="website"
				id="website"
				type="url"
				placeholder="acme.inc"
				placeholderSymbol={<WebsiteInputSvg />}
			/> 
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
			<MultipleSelectInput /> */}
		</div>
	);
};

export default CompanyOnboarding;
