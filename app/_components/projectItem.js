import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';





const ProjectItem = (props) => {
	const image = props.project.coverImage;

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const handleHover = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;
		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		x.set((mouseX - centerX) *-0.1);
		y.set((mouseY - centerY) *-0.1);
	}

	return (
		<motion.div
		// transition={{ duration: 0.3 }}
		// 		onMouseMove={handleHover}
		// 		onMouseLeave={() => {
		// 			x.set(0);
		// 			y.set(0);
		// 		}}
		// 		style={{ x: useTransform(x, (value) => `${value}px`), y: useTransform(y, (value) => `${value}px`)}}
			whileHover={{ y: -10 }}
			className='flex flex-1 flex-col gap-4 cursor-pointer bg-transparent'
		>
			<motion.div
				

				className={`flex bg-light-grey rounded-xl  hover:bg-grey  dark:bg-dark-light-black dark:hover:bg-dark-lightest-grey group relative p-6  justify-center items-center aspect-square  overflow-hidden  `}
			>
				<div className='relative flex justify-center pt-4 '>
					<img className='  object-fill ' src={image} alt='placeholder image' />
				</div>
			</motion.div>
			<div className='flex w-full flex-row justify-between font-text-regular text-sm gap-1 leading-4 '>
				<div className='flex flex-col w-full gap-1  '>
					<p className='text-off-black dark:text-pure-white truncate'>
						{props.project.title}
					</p>
					<p className='text-darker-grey dark:text-grey'>
						{props.project.client}
					</p>
				</div>
				<div className='flex w-full flex-col items-end gap-1  '>
					<p className='text-accent'>{props.project.year}</p>
					<p className='text-darker-grey dark:text-grey truncate'>
						{props.project.category}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectItem;
