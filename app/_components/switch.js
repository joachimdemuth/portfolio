import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../_contexts/theme-provider';

const Switch = () => {

	const { isDarkMode, toggleTheme } = useContext(ThemeContext);

	
	return (
		<div
			onClick={toggleTheme}
			className={`flex border-light-grey ${
				isDarkMode ? 'bg-accent' : 'bg-grey'
			} w-5 h-3 border ${
				isDarkMode ? 'justify-end' : 'justify-start'
			} p-[1px] items-center rounded-full cursor-pointer transition-all duration-300 ease-in-out`}
		>
			<div className={`flex w-2 h-2 bg-light-grey rounded-full`}></div>
		</div>
	);
};

export default Switch;
