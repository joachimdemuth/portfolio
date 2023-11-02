import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../_contexts/theme-provider';
import { motion } from 'framer-motion';





const Switch = () => {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);
	const [isOn, setIsOn] = useState(false);

	useEffect(() => {
		setIsOn(isDarkMode);
	}, [isDarkMode]);

	return (
		<div
			onClick={toggleTheme}
			className={`flex border-tertiary-text ${
				isOn ? 'bg-accent' : 'bg-secondary-text'
			} w-5 h-3 border ${
				isOn ? 'justify-end' : 'justify-start'
			} p-[1px] items-center rounded-full cursor-pointer`}
		>
			<div 
			className={`flex w-2 h-2 bg-tertiary-text rounded-full transition-all duration-200 ease-out`}></div>
		</div>
	);
};

export default Switch;
