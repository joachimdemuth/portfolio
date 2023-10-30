/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		
		colors: {
			'off-black': '#393939',
			'pure-white': '#ffffff',
			'darker-grey': '#8b8b8b',
			'grey': '#B9B9B9',
			'light-grey': '#E6E6E6',
			'lighter-grey': '#EBEBEB',
			'lightest-grey': '#F6F6F6',
			'accent': 'var(--accent-color)',
			dark: {
				'black': '#282828',
				'light-black': '#3f3f3f',
				'grey': '#B9B9B9',
				'light-grey': '#C6C6C6',
				'lighter-grey': '#DFDFDF',
				'lightest-grey': '#313131',

			},
		},
		extend: {

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
