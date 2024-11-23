"use client";

import { useRouter } from "next/navigation";

import {
	FormButton,
	LinkInput,
	LogoUpload,
	PageIntro,
	TextInput,
	WebsiteInputSvg,
} from "@/appComponents";

const CompanyOnboarding = () => {
	const router = useRouter();

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
				<FormButton
					onClick={() => router.push("/company-onboarding/details")}
				/>
			</form>
		</div>
	);
};

export default CompanyOnboarding;
