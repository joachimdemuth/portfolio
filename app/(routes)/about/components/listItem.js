import React from 'react';

export default function ListItem(props) {
	return (
		<div className='flex w-full flex-row justify-between'>
			<div className='flex max-md:flex-1 max-sm:w-1/2 md:w-1/3 '>
				<p className='text-secondary-text dark:text-dark-secondary-text text-sm'>
					{props.startYear} - {props.endYear}
				</p>
			</div>
			<div className='flex flex-1 sm:flex-row flex-col  '>
				<div className='flex flex-1 '>
					<p className='text-accent sm:text-secondary-text sm:dark:text-dark-secondary-text text-sm'>
						{props.firstLine}
					</p>
				</div>
				<div className='flex flex-1 sm:justify-end '>
					<p className='text-secondary-text dark:text-dark-secondary-text text-sm text-right'>
						{props.secondLine}
					</p>
				</div>
			</div>
		</div>
	);
}
