import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';


const itemVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};


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
			variants={itemVariants}
			animate='visible'
			initial='hidden'
			whileHover={{ y: -10 }}
			className='flex flex-1 flex-col gap-4 cursor-pointer bg-transparent'
		>
			<motion.div
				

				className={`flex bg-project-item-bg rounded-xl  hover:bg-opacity-90  dark:bg-dark-project-item-bg  group relative  justify-center items-center aspect-square  overflow-hidden  `}
			>
				<div className='relative flex justify-center '>
					<img className='object-fill' src={image} alt='placeholder image' />
				</div>
			</motion.div>
			<div className='flex w-full flex-row justify-between font-text text-sm gap-1 leading-4 '>
				<div className='flex flex-col w-full gap-1  '>
					<p className='text-primary-text dark:text-dark-primary-text truncate'>
						{props.project.title}
					</p>
					<p className='text-secondary-text dark:textdark-secondary-text'>
						{props.project.client}
					</p>
				</div>
				<div className='flex w-full flex-col items-end gap-1  '>
					<p className='text-accent dark:text-dark-accent'>{props.project.year}</p>
					<p className='text-secondary-text dark:text-dark-secondary-text truncate'>
						{props.project.category}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default ProjectItem;
