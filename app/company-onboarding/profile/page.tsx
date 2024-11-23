"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
	BackSvg,
	FormButton,
	LogoUpload,
	PageIntro,
	TextInput,
} from "@/appComponents";

const CompanyOnboardingProfile = () => {
	const router = useRouter();

	return (
		<div className="max-w-gridMax w-full">
			<PageIntro
				step="3/4"
				heading="Your profile"
				subHeading="Tell us about yourself"
			/>
			<LogoUpload heading="profile picture" />
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="space-y-6 mb-4"
			>
				<div className="flex gap-4">
					<TextInput
						label="First name"
						name="firstName"
						id="firstName"
						placeholder="Jane"
					/>
					<TextInput
						label="Last name"
						name="lastName"
						id="lastName"
						placeholder="Doe"
					/>
				</div>
				<TextInput
					label="What do you do at DevStudio?"
					name="position"
					id="position"
					placeholder="Your position"
				/>
				<FormButton
					onClick={() => router.push("/company-onboarding/invite-team")}
				/>
			</form>
			<div className="flex">
				<Link
					href="/company-onboarding/details"
					className="font-medium flex items-center gap-2 py-2.5 px-4 leading-button tracking-subheading text-subheading hover:scale-95 transition ease-in-out duration-500"
				>
					<BackSvg /> Back
				</Link>
			</div>
		</div>
	);
};

export default CompanyOnboardingProfile;
