import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{ source: "/", destination: "/company-onboarding", permanent: false },
		];
	},
};

export default nextConfig;
