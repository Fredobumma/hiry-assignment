"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import {
	BackSvg,
	EmailSvg,
	FormButton,
	LinkInput,
	PageIntro,
	PlusSvg,
	SelectInput,
} from "@/appComponents";

const CompanyOnboardingTeam = () => {
	const router = useRouter();

	return (
		<div className="max-w-gridMax w-full">
			<PageIntro
				step="4/4"
				heading="Invite team members"
				subHeading="Get your team on Hiry to keep everyone up to date in your hiring process."
			/>
			<form
				onSubmit={(e) => {
					e.preventDefault();
				}}
				className="space-y-3 mt-10 mb-2"
			>
				<div className="flex gap-2">
					<LinkInput
						name="email"
						id="email"
						type="email"
						placeholder="example@email.com"
						className="grow max-w-emailInput"
						placeholderSymbol={<EmailSvg />}
					/>
					<SelectInput
						id="role"
						name="role"
						placeholder="Select role"
						options={["admin", "member"]}
					/>
				</div>
				<button
					type="button"
					className="flex items-center gap-2 py-2.5 px-4 border border-noColor font-medium leading-button rounded-button text-sm tracking-step hover:bg-secondary hover:text-white hover:border-secondary transition ease-in-out duration-500"
				>
					<PlusSvg />
					Add invite
				</button>
				<FormButton onClick={() => router.push("/welcome-to-hiry")} />
			</form>
			<div className="flex items-center justify-between gap-2">
				<Link
					href="/company-onboarding/profile"
					className="font-medium flex items-center gap-2 py-2.5 px-4 leading-button tracking-subheading text-subheading hover:scale-95 transition ease-in-out duration-500"
				>
					<BackSvg /> Back
				</Link>
				<Link
					href="/welcome-to-hiry"
					className="font-medium flex items-center gap-2 py-2.5 px-4 leading-button tracking-subheading text-subheading hover:scale-95 transition ease-in-out duration-500"
				>
					Skip for now{" "}
					<span className="rotate-180">
						<BackSvg />
					</span>
				</Link>
			</div>
		</div>
	);
};

export default CompanyOnboardingTeam;
