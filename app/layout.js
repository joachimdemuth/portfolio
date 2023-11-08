import ThemeProvider from './_contexts/theme-provider';
import localFont from 'next/font/local'
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
const text = localFont({
	src: './_assets/_fonts/TASAExplorerVF.woff2',
	display: 'swap',
	variable: 'text',
})
const display = localFont({
	src: './_assets/_fonts/TASAOrbiterVF.woff2',
	display: 'swap',
	variable: 'display',
})


export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1.0'
			></meta>

			<body className='relative bg-light-grey dark:bg-dark-black select-text selection:bg-accent '>
				<div
					id='backdrop'
					className='collapse opacity-0 fixed inset-0 w-full h-screen bg-opacity-80 dark:bg-opacity-80 backdrop-blur-md bg-pure-white dark:bg-off-black  z-[5] transition-opacity duration-300 ease-out'
				></div>
				{<ThemeProvider>{children}</ThemeProvider>}
				<Analytics />
				<script defer data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="joachimdemuth" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting!" data-color="#FF6B00" data-position="Right" data-x_margin="18" data-y_margin="18"></script>			</body>
		</html>
	);
}
