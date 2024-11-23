import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Hiry",
	description:
		"To build a trusted community, we verify all companies on our platform. Providing your website and LinkedIn profile allows us to confirm legitimacy and keep standards high.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} text-primary antialiased max-w-maximum mx-auto overflow-x-hidden w-full`}
			>
				{children}
			</body>
		</html>
	);
}
