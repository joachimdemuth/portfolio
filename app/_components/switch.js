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
			className={`flex border-footer ${
				isOn ? 'bg-accent' : 'bg-tertiary-text'
			} w-5 h-3 border ${
				isOn ? 'justify-end' : 'justify-start'
			} p-[1px] items-center rounded-full cursor-pointer`}
		>
			<div 
			className={`flex w-2 h-2 bg-footer rounded-full transition-all duration-200 ease-out`}></div>
		</div>
	);
};

export default Switch;
