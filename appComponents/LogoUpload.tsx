// import Image from "next/image";

import { ProfilePictureSvg } from "./svgs";

const LogoUpload = ({ heading }: { heading?: string }) => {
	console.log(heading);
	return (
		<div className="flex items-center gap-6 mt-10 mb-6">
			{/* <figure className="size-upload rounded-full">
				<Image alt="company logo" src="" width={104} height={104} />
			</figure> */}
			<div className="flex items-center justify-center m-2 bg-uploadLogo rounded-full min-w-upload h-upload">
				{heading ? (
					<ProfilePictureSvg />
				) : (
					<span className="font-medium text-uploadPlaceholder text-uploadText leading-subheading tracking-step">
						A
					</span>
				)}
			</div>
			<div>
				<p className="font-medium text-sm leading-button tracking-step">
					Upload {heading || "your company logo"}
				</p>
				<p className="mt-1 mb-3 opacity-50 text-xs leading-subheading tracking-step">
					Add a picture to foster trust with potential hires. Maximum size 10MB.
				</p>
				<button
					type="button"
					className="bg-secondary font-medium leading-button py-1 px-3 rounded-button text-white text-sm tracking-step hover:bg-primary transition ease-in-out duration-500"
				>
					Upload
				</button>
			</div>
		</div>
	);
};

export default LogoUpload;
