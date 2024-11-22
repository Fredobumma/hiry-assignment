import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			borderRadius: {
				button: "100px",
			},
			borderColor: {
				remove: "#FECDD3",
			},
			boxShadow: {
				navItem:
					"0px 4px 8px -2px rgba(31, 41, 55, 0.10), 0px 2px 4px -2px rgba(31, 41, 55, 0.06)",
			},
			colors: {
				accent: "#DCFF7A",
				inActiveNav: "#F4F2FF",
				noColor: "#E4E4E7",
				primary: "#18181B",
				remove: "#E11D48",
				secondary: "#0500FF",
				step: "#71717A",
				subheading: "#52525B",
				tertiary: "#71717A",
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
				button: "130%",
				heading: "120%",
				subheading: "150%",
			},
			maxWidth: {
				maximum: "1920px",
			},
			spacing: {
				line: "18px",
			},
		},
	},
	plugins: [],
} satisfies Config;
