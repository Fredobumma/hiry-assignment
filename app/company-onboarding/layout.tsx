import { NavList } from "@/components";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<NavList />
			{children}
		</main>
	);
}
