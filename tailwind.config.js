/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			animation: {
				'marquee': 'marquee 10s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(calc(-100% - 16px))' },
				},
			
				},
			  
			
		colors: {
			'bg': '#F9F9F9',
			'footer': '#F6F6F6',
			'primary-text': '#393939',
			'secondary-text': '#888888',
			'tertiary-text': '#B9B9B9',
			'accent': '#FF6B00',
			'project-item-bg': '#EBEBEB',
			'dark-bg': '#282828',
			'dark-footer': '#313131',
			'dark-primary-text': '#FFFFFF',
			'dark-secondary-text': '#B9B9B9',
			'dark-tertiary-text': '#888888',
			'dark-accent': '#FF6B00',
			'dark-project-item-bg': '#4A4A4A'
			

			
		},

			fontFamily: {
				'display': [
					'var(--display)',
					'system-ui',
					'sans-serif',
				],
				'text': [
					'var(--text)',
					'system-ui',
					'sans-serif',
				],
				
			},
		},
	},
	plugins: [],
};
