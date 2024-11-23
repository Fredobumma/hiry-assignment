import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./appComponents/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
			borderRadius: {
				button: "100px",
				input: "10px",
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
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
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
				badge: "5px",
				gridMax: "440px",
				layout: "21px",
				line: "18px",
				minInput: "200px",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
