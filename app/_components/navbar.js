'use client';
import React, { useEffect, useState } from 'react';
import Switch from './switch';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

import SpotifyPlayer from './spotifyPlayer';


const mobileMenuVariants = {
	hidden: {
		width: 0,
		height: 'auto',
		visiblity: 'collapse',
	},
	visible: {
		visiblity: 'visible',
		width: ['0%', '100%', '100%'],
		height: ['24px', '24px', '250px'],
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			when: 'beforeChildren',
			staggerChildren: 0.3,
		},
	},
	exit: {
		height:['250px', '24px', '24px'],
		width: ['100%', '0%', '0%'],
		transition: {
			duration: 0.8,
			ease: 'easeInOut',
			when: 'afterChildren',
		},
	},
};

const childrenVariants = {
	hidden: {
		opacity: 0,
		x: -10,
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.2,
			ease: 'easeInOut',
		},
	},
};

export default function Navbar() {
	const [currentAccent, setCurrentAccent] = useState(0);
	const [isOpen, toggleOpen] = useCycle(false, true);

	const handleBurgerClick = () => {
		toggleOpen();
	};

	useEffect(() => {
		const div = document.getElementById('backdrop');
		const navbarY = document.querySelector('.navbar').getBoundingClientRect();

		if (isOpen) {
			div.style.top = `calc(${navbarY.top}px - 16px)`;
			div.classList.remove('collapse');
			// Ensure the element has been rendered and is no longer 'collapsed' before starting the opacity transition
			requestAnimationFrame(() => {
				requestAnimationFrame(() => {
					div.classList.replace('opacity-0', 'opacity-100');
				});
			});
		} else {

			
			// Add a delay before collapsing the div, to allow the fade out transition to complete
			setTimeout(() => {
				if (!isOpen) {
					// Ensure the menu is still closed after the timeout
					div.classList.replace('opacity-100', 'opacity-0');
					setTimeout(() => {
					div.classList.add('collapse');
					}, 300)
				}
			}, 1000); // This delay should match the transition duration (0.3s)

		}
	}, [isOpen]);

	// const accents = [
	// 	'#FF6B00',
	// 	'#a6ff00',
	// 	'#00ddff',
	// 	'#dc89ff',
	// 	'#00ff55',
	// 	'#eaff00',
	// ];
	const pathname = usePathname();

	// const handleAccentChange = () => {
	// 	if (currentAccent === accents.length - 1) {
	// 		setCurrentAccent(0);
	// 		document.documentEleƒment.style.setProperty('--accent-color', accents[currentAccent]);
	// 	} else {
	// 		setCurrentAccent(currentAccent + 1);
	// 		document.documentElement.style.setProperty('--accent-color', accents[currentAccent]);
	// 	}
	// }

	return (

		<div className='navbar flex relative overflow-visible w-full text-sm font-text-regular leading-4 gap-6 mb-12 items-center'>
			{/* {!isOpen && ( */}
				<div className='flex flex-1'>
					<div className='md:flex md:flex-1 hidden text-accent dark:text-dark-accent font-display'>
						Design Engineer
					</div>

					<div className='flex flex-1 flex-col md:flex-row md:gap-6'>
						<Link href='/about'>
							<div
								className={`flex flex-1 ${
									pathname === '/about' ? 'text-accent' : 'text-tertiary-text'
								} hover:text-accent hover:cursor-pointer`}
							>
								About
							</div>
						</Link>
						<div
							className={`flex flex-1 ${
								pathname === '/' || pathname.startsWith('/project/')
									? 'text-accent'
									: 'text-tertiary-text'
							} hover:text-accent hover:cursor-pointer`}
						>
							<Link href='/'>Work</Link>
						</div>
					</div>
					<div className='md:flex md:justify-between md:flex-1 hidden text-secondary-text dark:text-dark-secondary-text '>
						<div className='flex justify-start gap-1 items-start'>
							<p>Dark mode</p>
							<Switch />
						</div>
						{/* <div
							onClick={handleAccentChange}
							className='flex flex-row gap-1 items-center hover:cursor-pointer'
						>
							<p className='text-accent'>Accent</p>
							<div className='w-2 h-2 rounded-full bg-accent border-[1px] border-grey'></div>
						</div> */}
						<SpotifyPlayer />
					</div>

					<div
						onClick={() => handleBurgerClick()}
						className='flex md:hidden z-20 rounded-full justify-center items-center gap-1 flex-col bg-project-item-bg dark:bg-dark-tertiary-text w-[24px] h-[24px] hover:cursor-pointer'
					>
						<div className='w-[12px] h-[1px] bg-secondary-text dark:bg-dark-secondary-text'></div>
						<div className='w-[12px] h-[1px] bg-secondary-text dark:bg-dark-secondary-text'></div>
					</div>
				</div>
			{/* )} */}

			{/* MOBILE MENU */}
			<AnimatePresence>
			{isOpen && (
					
					<motion.div
						variants={mobileMenuVariants}
						animate='visible'
						initial='hidden'
						exit='exit'
						className={`absolute flex p-4 gap-6 rounded-lg flex-col top-0 right-0 w-0
					h-20  flex-1 bg-project-item-bg dark:bg-dark-footer text-sm z-30 transition-all duration-500 ease-in-out overflow-hidden`}
					>
						<motion.div
							variants={childrenVariants}
							className=' flex flex-col w-full gap-2'
						>
							<div className='flex w-full flex-row justify-between'>
								<div className='text-primary-text dark:text-dark-primary-text text-sm'>
									Settings
								</div>

								<div
									onClick={() => handleBurgerClick()}
									className='flex md:hidden rounded-full justify-center items-center gap-1 flex-col w-[24px] h-[24px] hover:cursor-pointer'
								>
									<div className='w-[12px] h-[1px] bg-primary-text dark:bg-dark-primary-text'></div>
								</div>
							</div>

							<div className='flex w-full flex-row justify-between items-center gap-6 border-b-[1px] border-grey pb-10'>
								<div className='flex w-full'>
									<p className='text-secondary-text dark:text-dark-secondary-text text-sm'>Dark mode</p>
								</div>
								<div className='flex w-full'>
									<Switch />
								</div>
							</div>
						</motion.div>

						<motion.div
							variants={childrenVariants}
							className=' flex flex-col w-full gap-2 '
						>
							<div className='text-primary-text dark:text-dark-primary-text text-sm'>
								Contact
							</div>
							<div className='flex flex-col w-full gap-2'>
								<div className='flex w-full flex-row justify-between'>
									<div className='flex flex-1'>
										<p className='text-secondary-text dark:text-dark-secondary-text '>M</p>
									</div>
									<div className='flex flex-1'>
										<a href='mailto:jdemuth18@gmail.com'>
											<p className='text-secondary-text dark:text-dark-secondary-text hover:text-accent dark:hover:text-dark-accent'>
												jdemuth18@gmail.com
											</p>
										</a>
									</div>
								</div>
								<div className='flex w-full flex-row justify-between'>
									<div className='flex flex-1'>
										<p className='text-secondary-text dark:text-dark-secondary-text'>IG</p>
									</div>
									<div className='flex flex-1'>
										<a
											href='https://instagram.com/_joachimdemuth'
											target='_blank'
											rel='noopener noreferrer'
										>
											<p className='text-secondary-text dark:text-dark-secondary-text hover:text-accent'>
												_joachimdemuth
											</p>
										</a>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
			)}
			</AnimatePresence>
		</div>
	);
}
