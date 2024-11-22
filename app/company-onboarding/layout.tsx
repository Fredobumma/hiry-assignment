export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<p className="text-step text-sm leading-subheading tracking-step">
				Step 1
			</p>
			<h1 className="font-medium text-heading leading-heading tracking-heading">
				Company info
			</h1>
			<p className="text-subheading leading-subheading tracking-subheading">
				To build a trusted community, we verify all companies on our platform.
				Providing your website and LinkedIn profile allows us to confirm
				legitimacy and keep standards high.
			</p>
			{children}
		</main>
	);
}
