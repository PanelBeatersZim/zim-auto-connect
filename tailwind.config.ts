
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
			},
			colors: {
				primary: {
					DEFAULT: '#9b87f5',
					foreground: "#ffffff",
				},
				accent: {
					DEFAULT: '#F97316',
					foreground: '#fff',
				},
				background: '#F6F6F7',
				card: {
					DEFAULT: '#fff',
					foreground: '#403E43',
				},
				grayish: "#E5DEFF",
				heading: "#222222",
				body: "#403E43",
				badgeVerified: "#8B5CF6",
				badgeRecommended: "#F97316",
				badgeTopRated: "#22c55e",
			},
			borderRadius: {
				lg: '1rem',
				md: '0.75rem',
				sm: '0.5rem'
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0)' }
				}
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

