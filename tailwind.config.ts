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
			colors: {
				primary: "#18181B",
				step: "#71717A",
				subheading: "#52525B",
				secondary: "#0500FF",
				noColor: "#E4E4E7",
				remove: "#E11D48",
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
				button: "130%",
				subheading: "150%",
			},
			maxWidth: {
				maximum: "1920px",
			},
		},
	},
	plugins: [],
} satisfies Config;
