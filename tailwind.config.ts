
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
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
        barber: {
          '50': '#f9f6f3',
          '100': '#f0e9e4',
          '200': '#e0d0c5',
          '300': '#ccb09e',
          '400': '#b58c74',
          '500': '#a77057',
          '600': '#9a5c48',
          '700': '#803d33',
          '800': '#6b342f',
          '900': '#5a2e2a',
          '950': '#311614',
        },
        gold: {
          '50': '#fcf9ef',
          '100': '#f8f0d7',
          '200': '#f0e1af',
          '300': '#e8cc7d',
          '400': '#dec14c',
          '500': '#cfab2d',
          '600': '#b98a22',
          '700': '#97661d',
          '800': '#7b521e',
          '900': '#66431d',
          '950': '#382310',
        },
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" }
        }
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards"
			},
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'raleway': ['"Raleway"', 'sans-serif'],
      },
      backgroundImage: {
        'wood-pattern': "url('https://images.unsplash.com/photo-1533713692156-f70938dc0d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80')",
      },
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
