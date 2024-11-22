export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<button
				type="button"
				className="bg-secondary font-medium leading-button py-1 px-3 rounded-button text-white text-sm tracking-step hover:bg-primary transition ease-in-out duration-500"
			>
				Upload
			</button>
			<button
				type="button"
				className="border border-noColor font-medium leading-button py-1 px-3 rounded-button text-sm tracking-step hover:bg-secondary hover:text-white hover:border-secondary transition ease-in-out duration-500"
			>
				Uploading
			</button>
			<button
				type="button"
				className="border border-remove font-medium leading-button py-1 px-3 rounded-button text-remove text-sm tracking-step hover:bg-remove hover:text-white hover:border-remove transition ease-in-out duration-500"
			>
				Remove
			</button>
			<button
				type="submit"
				className="bg-secondary font-medium leading-button tracking-subheading p-3.5 rounded-button text-white w-full hover:bg-primary transition ease-in-out duration-500"
			>
				Continue
			</button>
			{children}
		</main>
	);
}
