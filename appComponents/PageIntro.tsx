type PageIntroProps = {
	step: string;
	heading: string;
	subHeading: string;
};

const PageIntro = ({ step, heading, subHeading }: PageIntroProps) => {
	return (
		<>
			<p className="text-step text-sm leading-subheading tracking-step">
				Step {step}
			</p>
			<h1 className="font-medium text-heading leading-heading tracking-heading my-3">
				{heading}
			</h1>
			<p className="text-subheading leading-subheading tracking-subheading">
				{subHeading}
			</p>
		</>
	);
};

export default PageIntro;
