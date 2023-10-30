'use client';
import React, { useEffect, useState } from 'react';
import Switch from './switch';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useCycle } from 'framer-motion';

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

	const accents = [
		'#FF6B00',
		'#a6ff00',
		'#00ddff',
		'#dc89ff',
		'#00ff55',
		'#eaff00',
	];
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
					<div className='md:flex md:flex-1 hidden text-accent'>
						Design Engineer
					</div>

					<div className='flex flex-1 flex-col md:flex-row md:gap-6'>
						<Link href='/about'>
							<div
								className={`flex flex-1 ${
									pathname === '/about' ? 'text-accent' : 'text-grey'
								} hover:text-accent hover:cursor-pointer`}
							>
								About
							</div>
						</Link>
						<div
							className={`flex flex-1 ${
								pathname === '/' || pathname.startsWith('/project/')
									? 'text-accent'
									: 'text-grey'
							} hover:text-accent hover:cursor-pointer`}
						>
							<Link href='/'>Work</Link>
						</div>
					</div>
					<div className='md:flex md:flex-1 hidden text-grey '>
						<div className='flex flex-1 gap-1 items-center'>
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
					</div>

					<div
						onClick={() => handleBurgerClick()}
						className='flex md:hidden z-20 rounded-full justify-center items-center gap-1 flex-col bg-light-grey dark:bg-off-black w-[24px] h-[24px] hover:cursor-pointer'
					>
						<div className='w-[12px] h-[1px] bg-grey'></div>
						<div className='w-[12px] h-[1px] bg-grey'></div>
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
					h-20  flex-1 bg-light-grey dark:bg-dark-light-black text-sm z-30 transition-all duration-500 ease-in-out overflow-hidden`}
					>
						<motion.div
							variants={childrenVariants}
							className=' flex flex-col w-full gap-2'
						>
							<div className='flex w-full flex-row justify-between'>
								<div className='text-off-black dark:text-light-grey text-sm'>
									Settings
								</div>

								<div
									onClick={() => handleBurgerClick()}
									className='flex md:hidden rounded-full justify-center items-center gap-1 flex-colw-[24px] h-[24px] hover:cursor-pointer'
								>
									<div className='w-[12px] h-[1px] bg-off-black dark:bg-lightest-grey'></div>
								</div>
							</div>

							<div className='flex w-full flex-row justify-between items-center gap-6 border-b-[1px] border-grey pb-10'>
								<div className='flex w-full'>
									<p className='text-darker-grey text-sm'>Dark mode</p>
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
							<div className='text-off-black dark:text-light-grey text-sm'>
								Contact
							</div>
							<div className='flex flex-col w-full gap-2'>
								<div className='flex w-full flex-row justify-between'>
									<div className='flex flex-1'>
										<p className='text-darker-grey'>M</p>
									</div>
									<div className='flex flex-1'>
										<a href='mailto:jde@maybetomorrow.dk'>
											<p className='text-grey dark:text-darker-grey hover:text-accent'>
												jde@maybetomorrow.dk
											</p>
										</a>
									</div>
								</div>
								<div className='flex w-full flex-row justify-between'>
									<div className='flex flex-1'>
										<p className='text-darker-grey'>IG</p>
									</div>
									<div className='flex flex-1'>
										<a
											href='https://instagram.com/_joachimdemuth'
											target='_blank'
											rel='noopener noreferrer'
										>
											<p className='text-grey hover:text-accent dark:text-darker-grey'>
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
