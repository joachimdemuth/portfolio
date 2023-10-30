'use client';
import React, { useState, useEffect } from 'react';

const Footer = () => {
	const [windowSize, setWindowSize] = useState({});
	const [operatingSystem, setOperatingSystem] = useState('');

	useEffect(() => {
		const os = window.navigator.userAgentData.platform;

		
		setOperatingSystem(os);
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
		<div className='flex relative items-center w-full px-6 h-12 bg-lightest-grey dark:bg-dark-lightest-grey z-10 text-xs text-grey dark:text-accent'>
			<div className='flex flex-1 justify-start items-center'>©2023</div>
			<div className='flex flex-1 justify-center items-center'>
				Joachim Demuth
			</div>
			<div className='flex flex-1 justify-center items-end flex-col'>
				{operatingSystem && <p>{operatingSystem}</p>}
				{operatingSystem && <p>{windowSize.width + 'x' + windowSize.height}</p>}
			</div>
		</div>
	);
};

export default Footer;
