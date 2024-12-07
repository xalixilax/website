/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/**/*.tsx",
		"./storybook/**/*.ts",
		"../../packages/design-system/src/**/*.tsx",
	],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			textShadow: {
				DEFAULT:
					"0 0.03em var(--tw-shadow-color), 0 0.06em var(--tw-shadow-color), 0 0.09em var(--tw-shadow-color)",
			},
			slope: {
				DEFAULT: "",
				s: "4vw",
				e: "4vw,0,0,4vw",
				st: "4vw,0,0,0",
				sb: "0,4vw,0,0",
				et: "0,0,4vw,0",
				eb: "0,0,0,4vw",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
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
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		// plugin(({ matchUtilities, theme }) => {
		// 	matchUtilities(
		// 		{
		// 			"text-shadow": (value) => ({
		// 				textShadow: value,
		// 			}),
		// 		},
		// 		{ values: theme("textShadow") },
		// 	);
		// }),
		// plugin(({ matchComponents, addComponents }) => {
		// 	addComponents({
		// 		".slope": {
		// 			clipPath: "polygon(var(--tw-slope))",
		// 			paddingTop: "max(var(--tw-slope-a), var(--tw-slope-b))",
		// 			paddingBottom: "max(var(--tw-slope-c), var(--tw-slope-d))",
		// 		},
		// 	});
		// 	matchComponents({
		// 		"slope-s": (value) => ({
		// 			"--tw-slope-a": value,
		// 			"--tw-slope-d": value,
		// 		}),
		// 		"slope-e": (value) => ({
		// 			"--tw-slope-b": value,
		// 			"--tw-slope-c": value,
		// 		}),
		// 		"slope-so": (value) => ({
		// 			"--tw-slope-b": value,
		// 			"--tw-slope-d": value,
		// 		}),
		// 		"slope-eo": (value) => ({
		// 			"--tw-slope-a": value,
		// 			"--tw-slope-c": value,
		// 		}),
		// 		"slope-st": (value) => ({
		// 			"--tw-slope-a": value,
		// 		}),
		// 		"slope-sb": (value) => ({
		// 			"--tw-slope-d": value,
		// 		}),
		// 		"slope-et": (value) => ({
		// 			"--tw-slope-b": value,
		// 		}),
		// 		"slope-eb": (value) => ({
		// 			"--tw-slope-c": value,
		// 		}),
		// 	});
		// }),
	],
};
