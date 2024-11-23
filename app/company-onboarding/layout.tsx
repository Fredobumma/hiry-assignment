import { NavList } from "@/appComponents";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			{/* <NavList /> */}
			{children}
		</main>
	);
}
