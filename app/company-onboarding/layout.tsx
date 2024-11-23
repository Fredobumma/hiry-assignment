import { Header, NavList } from "@/appComponents";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="px-10">
			<Header />
			<section className="flex gap-layout pt-4 pb-20">
				<NavList />
				{children}
			</section>
		</main>
	);
}
