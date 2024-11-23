"use client";

import {
	FormButton,
	LinkInput,
	LogoUpload,
	PageIntro,
	TextInput,
	WebsiteInputSvg,
} from "@/appComponents";

const CompanyOnboarding = () => {
	return (
		<div className="max-w-gridMax w-full">
			<PageIntro
				step="1"
				heading="Company info"
				subHeading="To build a trusted community, we verify all companies on our platform.
				Providing your website and LinkedIn profile allows us to confirm
				legitimacy and keep standards high."
			/>
			<LogoUpload />
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="space-y-6"
			>
				<TextInput
					label="Company name"
					name="companyName"
					id="companyName"
					placeholder="Acme Inc."
				/>
				<LinkInput
					label="Website"
					name="website"
					id="website"
					type="url"
					placeholder="acme.inc"
					placeholderSymbol={<WebsiteInputSvg />}
				/>
				<LinkInput
					label="LinkedIn profile"
					name="username"
					id="username"
					type="text"
					placeholder="username"
					placeholderSymbol="linkedin.com/"
				/>
				<FormButton />
			</form>
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
