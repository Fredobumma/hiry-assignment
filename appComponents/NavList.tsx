"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	CompanyInfoSvg,
	DetailsSvg,
	DottedLineSvg,
	InviteTeamSvg,
	LineSvg,
	ProfileSvg,
	ProgressSvg,
} from "./svgs";

const NavList = () => {
	const pathname = usePathname();

	const listItems = [
		{
			href: "/company-onboarding",
			title: "Company info",
			Icon: CompanyInfoSvg,
		},
		{
			href: "/company-onboarding/details",
			title: "Details",
			Icon: DetailsSvg,
		},
		{
			href: "/company-onboarding/profile",
			title: "Your profile",
			Icon: ProfileSvg,
		},
		{
			href: "/company-onboarding/invite-team",
			title: "Invite team",
			Icon: InviteTeamSvg,
		},
	];
	const progressIndex = listItems.findIndex(({ href }) => href === pathname);

	return (
		<nav className="max-w-gridMax mt-3 w-full">
			<ul>
				{listItems.map(({ href, title, Icon }, i) => (
					<li key={i} className="h-fit">
						<Link
							href={href}
							className={`font-medium flex gap-3 items-center leading-subheading tracking-subheading ${
								href === pathname ? "" : "text-tertiary"
							}`}
						>
							{progressIndex > i ? (
								<span className="bg-accent border border-accent p-2.5 rounded-button">
									<ProgressSvg />
								</span>
							) : (
								<span
									className={`border p-2.5 rounded-button ${
										pathname === href
											? "border-noColor shadow-navItem"
											: "bg-inActiveNav border-inActiveNav"
									}`}
								>
									<Icon />
								</span>
							)}{" "}
							{title}
						</Link>
						{i + 1 < listItems.length && (
							<span className="inline-block px-line -mb-2">
								{progressIndex > i ? <LineSvg /> : <DottedLineSvg />}
							</span>
						)}
					</li>
				))}
			</ul>
		</nav>
	);
};

export default NavList;
