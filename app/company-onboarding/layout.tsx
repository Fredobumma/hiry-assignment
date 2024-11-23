import { Header, NavList } from "@/appComponents";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="px-10">
			<Header />
			<section className="flex gap-layout my-20 pt-4">
				<NavList />
				{children}
			</section>
		</main>
	);
}
