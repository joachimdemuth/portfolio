'use client';

import React from 'react';
import Name from '@/app/_components/name';
import Navbar from '@/app/_components/navbar';
import Footer from '@/app/_components/footer';
import pb from '../../_assets/_profile-picture/pb.jpg';
import Image from 'next/image';
import ListItem from './components/listItem';
import { motion } from 'framer-motion';

export default function About() {
	return (
		<div className='flex flex-col w-full min-h-screen font-text-regular'>
			<div className='flex flex-col flex-1 justify-start items-center p-4 gap-4 min-w-full bg-pure-white dark:bg-dark-black md:p-6'>
				<Name />
				<div className='flex w-full bg-accent h-[1px]'></div>
				<Navbar />
				<div className='flex flex-wrap w-full lg:flex-row flex-col justify-between gap-12 pt-6'>
					<div className='flex flex-1 flex-col gap-6'>
						<motion.div
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.1 }}
							initial={{ opacity: 0, y: 10 }}
							whileHover={{
								rotate: 360,
								scale: 1.1,
								transition: {
									duration: 1,
									ease: 'easeInOut',
								},
							}}
							className='flex w-20 h-20 aspect-square rounded-full overflow-hidden border-accent border-[1px]'
						>
							<Image
								className=''
								width={80}
								height={80}
								src={pb}
								alt='Profile picture'
							/>
						</motion.div>

						<div className='flex flex-1 flex-col gap-6 text-off-black dark:text-light-grey'>
							<motion.p
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.2, delay: 0.2, type: 'tween' }}
								initial={{ opacity: 0, y: 10 }}
								className='font-display-medium text-3xl xl:max-w-[90%]'
							>
								As a Design Engineer, I spend my time at the intersection of
								design and frontend/creative programming. My strength lies in
								not just envisioning innovative designs, but bringing them to
								life through precise and creative coding. The fusion of
								aesthetic design with the logic of programming is where I create
								user-centric digital platforms.
							</motion.p>
							<motion.p
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.2, delay: 0.3 }}
								initial={{ opacity: 0, y: 10 }}
								className='font-text-regular text-lg xl:max-w-[90%]'
							>
								My passion extends to emerging technologies like generative AI,
								continually fueling my curiosity and drive to experiment. For
								me, design-driven development is a collaborative journey where
								design and technology dance together, leading to applications
								that are as functional as they are visually compelling. With
								each project, my goal is to push the boundaries, explore new
								horizons, and deliver digital experiences that resonate with
								users while staying ahead of the technological curve. Through
								continuous exploration and a zest for the new, I aim to
								contribute to a future where design and technology harmoniously
								coexist.
							</motion.p>
						</div>
					</div>
					<motion.div
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2, delay: 0.4 }}
						initial={{ opacity: 0, y: 10 }}
						className='flex flex-1 justify-start flex-col max-md:border-t-[1px] max-md:border-accent lg:pt-[108px] gap-10 max-md:pt-6'
					>
						<div className='flex flex-row justify-space'>
							<div className='flex max-md:w-1/2 md:w-1/3 flex-col'>
								<p className='text-sm text-off-black dark:text-light-grey'>
									Location
								</p>
								<p className='text-grey dark:text-darker-grey text-sm'>
									Copenhagen,
								</p>
								<p className='text-grey dark:text-darker-grey text-sm'>
									Denmark
								</p>
							</div>
							<div className='flex max-lg:w-1/2 lg:w-2/3 flex-col lg:justify-end'>
								<p className='text-sm text-off-black dark:text-light-grey'>
									Contact
								</p>
								<a href='mailto:jde@maybetomorrow.dk'>
									<motion.p
										whileHover={{ x: 5 }}
										className='text-sm text-grey dark:text-darker-grey hover:text-accent dark:hover:text-accent hover:cursor-pointer'
									>
										M jde@maybetomorrow.dk
									</motion.p>
								</a>
								<a
									href='https://instagram.com/_joachimdemuth'
									target='_blank'
									rel='noopener noreferrer'
								>
									<motion.p
										whileHover={{ x: 5 }}
										className='text-sm text-grey dark:text-darker-grey hover:text-accent dark:hover:text-accent hover:cursor-pointer'
									>
										IG _joachimdemuth
									</motion.p>
								</a>
								<a
									href='https://x.com/poetenpoul'
									target='_blank'
									rel='noopener noreferrer'
								>
									<motion.p
										whileHover={{ x: 5 }}
										className='text-sm text-grey dark:text-darker-grey hover:text-accent dark:hover:text-accent hover:cursor-pointer'
									>
										X @poetenpoul
									</motion.p>
								</a>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<p className='text-sm text-off-black dark:text-light-grey'>
								Experience
							</p>
							<ListItem
								startYear='2023'
								endYear='Present'
								firstLine='Product Designer'
								secondLine='Maybe Tomorrow'
							/>
							<ListItem
								startYear='2022'
								endYear='2023'
								firstLine='Digital Designer'
								secondLine='VENZO_'
							/>
							<ListItem
								startYear='2021'
								endYear='2022'
								firstLine='Digital Designer'
								secondLine='Telenor'
							/>
							<ListItem
								startYear='2020'
								endYear='2021'
								firstLine='Digital Designer (Student)'
								secondLine='Telenor'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<p className='text-sm text-off-black dark:text-light-grey'>
								Experience
							</p>
							<ListItem
								startYear='2019'
								endYear='2021'
								firstLine='M.Sc. Digital Design & Interactive Technologies'
								secondLine='IT University of Copenhagen'
							/>
							<ListItem
								startYear='2016'
								endYear='2019'
								firstLine='B.Sc. Digital Design & Interactive Technologies'
								secondLine='Aarhus University'
							/>
						</div>
					</motion.div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
