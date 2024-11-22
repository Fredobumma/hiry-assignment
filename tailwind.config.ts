import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#18181B",
				step: "#71717A",
				subheading: "#52525B",
			},
			fontSize: {
				heading: "32px",
			},
			letterSpacing: {
				heading: "-0.64px",
				subheading: "-0.32px",
				step: "-0.28px",
			},
			lineHeight: {
				heading: "120%",
				subheading: "150%",
			},
			maxWidth: {
				maximum: "1920px",
			},
		},
	},
	plugins: [],
} satisfies Config;
