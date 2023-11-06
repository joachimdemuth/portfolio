'use client';
import React, { useState, useEffect } from 'react';

const Footer = () => {
	const [windowSize, setWindowSize] = useState({});
	const [operatingSystem, setOperatingSystem] = useState('');

	useEffect(() => {
		const os = window.navigator.platform;

		if(os.includes('MacIntel')) {

			setOperatingSystem('macOS');
		}
		if(os === 'Win32') {
			setOperatingSystem('Windows');
		}
		if(os === 'Linux x86_64') {
			setOperatingSystem('Linux');
		}
		if(os === 'iPhone') {
			setOperatingSystem('iOS');
		} 
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='flex relative items-center w-full px-6 h-12 bg-footer dark:bg-dark-footer z-10 font-text text-xs text-tertiary-text dark:text-accent'>
			<div className='flex flex-1 justify-start items-center'>©2023</div>
			<div className='flex flex-1 justify-center items-center'>
				Joachim Demuth
			</div>
			<div className='flex flex-1 justify-center items-end flex-col'>
				{operatingSystem ? <p>{operatingSystem}</p> : <p>Unknown</p>}
				{operatingSystem && <p>{windowSize.width + 'x' + windowSize.height}</p>}
			</div>
		</div>
	);
};

export default Footer;
