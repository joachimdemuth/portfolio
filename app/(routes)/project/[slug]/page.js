'use client';
import React, { useState, useEffect } from 'react';
import projectData from '../../../_utils/project.json';
import Name from '../../../_components/name';
import Navbar from '../../../_components/navbar';
import Footer from '../../../_components/footer';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Page({ params }) {
	const [post, setPost] = useState(null);
	const [images, setImages] = useState(null);
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const foundPost = projectData.find(
			(project) => project.slug === params.slug,
		);
		setPost(foundPost);
		setImages(foundPost.imageUrls);
	}, [params.slug]);

	const handleImageChange = () => {
		if (currentImage === images.length - 1) {
			setCurrentImage(0);
		} else {
			setCurrentImage(currentImage + 1);
		}
	};

	return (
		<div className='flex flex-col w-full min-h-screen overflow-visible'>
			<div className='flex flex-1 flex-col justify-start items-center overflow-visible gap-4 min-w-full bg-bg dark:bg-dark-bg p-4 md:p-6'>
				<Name />
				<div className='flex w-full bg-accent dark:bg-dark-accent h-[1px]'></div>

				<Navbar />

				<div className='flex w-full bg-footer dark:bg-dark-footer md:p-6 rounded-[10px] gap-6 flex-col-reverse md:flex-row'>
					<div className='flex w-full md:w-1/2 max-sm:px-4'>
						{post && (
							<div className='flex w-full flex-col'>
								<div className='flex w-full flex-col font-display text-sm border-b-[1px] border-tertiary-text dark:border-dark-tertiary-text pb-10 gap-2'>
									<p className='text-accent dark:text-dark-accent'>{post.title}</p>
									<p className='text-tertiary-text dark:text-dark-tertiary-text '>
										{post.description}
									</p>
								</div>
								<div className='flex w-full flex-row py-2 border-b-[1px] border-tertiary-text dark:border-dark-tertiary-text text-sm'>
									<div className='flex flex-1 text-secondary-text dark:text-dark-secondary-text'>
										Client
									</div>
									<div className='flex flex-1 text-accent'>{post.client}</div>
								</div>
								<div className='flex w-full flex-row py-2 border-b-[1px] border-tertiary-text dark:border-dark-tertiary-text text-sm'>
									<div className='flex flex-1 text-secondary-text dark:text-dark-secondary-text'>
										Year
									</div>
									<div className='flex flex-1 text-tertiary-text dark:text-dark-tertiary-text'>
										{post.year}
									</div>
								</div>
								<div className='flex w-full flex-row py-2 border-b-[1px] border-tertiary-text dark:border-dark-tertiary-text text-sm'>
									<div className='flex flex-1 text-secondary-text dark:text-dark-secondary-text'>
										Role
									</div>
									<div className='flex flex-1 flex-col text-tertiary-text dark:text-dark-tertiary-text'>
										{post.role.map((r) => (
											<p key={r}>{r}</p>
										))}
									</div>
								</div>
								<div className='flex w-full flex-row py-2 border-b-[1px] border-tertiary-text dark:border-dark-tertiary-text text-sm'>
									<div className='flex flex-1 text-secondary-text dark:text-dark-secondary-text'>
										Service
									</div>
									<div className='flex flex-1 text-tertiary-text dark:text-dark-tertiary-text flex-col'>
										{post.services.map((service) => (
											<p key={service}>{service}</p>
										))}
									</div>
								</div>
								<div className='flex w-full flex-row py-2 border-b-[1px] border-tertiary-text dark:border-dark-tertiary-text text-sm'>
									<div className='flex flex-1 text-secondary-text dark:text-dark-secondary-text'>
										Platforms
									</div>
									<div className='flex flex-1 flex-col text-tertiary-text dark:text-dark-tertiary-text'>
										{post.platforms.map((platform) => (
											<p key={platform}>{platform}</p>
										))}
									</div>
								</div>
								{post.url && (
									<div className='flex w-full flex-row py-2 border-b-[1px] border-tertiary-text dark:border-dark-tertiary-text text-sm'>
										<div className='flex flex-1 text-secondary-text dark:text-dark-secondary-text'>
											URL
										</div>
										<Link
											className='flex flex-1'
											href={post.url}
											target='_blank'
											rel='noopener noreferrer'
										>
											<motion.div
												whileHover={{ x: 10, color: '#FF6B00' }}
												className='flex flex-1 text-tertiary-text dark:text-dark-tertiary-text'
											>
												{post.url}
											</motion.div>
										</Link>
									</div>
								)}
							</div>
						)}
					</div>
					{post && images && (
						<div className='flex-col relative  flex w-full md:w-1/2 overflow-hidden'>
							{images[currentImage].includes('.mp4') ? (
								<video
									className='relative w-full h-full aspect-square object-contain rounded-[2px]'
									src={images[currentImage]}
									autoPlay
									loop
									muted
									controls
									// controlsList='nodownload'
								></video>
							) : (
								<img
									className='relative w-full h-full aspect-square object-cover rounded-[2px]'
									src={images[currentImage]}
								/>
							)}

								{images.length > 1 && (
							<div className={`flex w-full py-4 max-sm:px-4 ${images.length > 1 ? "justify-between": "justify-center"}  items-center`}>
									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ duration: 0.2 }}
										onClick={handleImageChange}
										className=' w-[56px] flex justify-center items-center h-[40px] rounded-2xl bg-accent dark:bg-dark-accent bg-opacity-80 backdrop-blur-md hover:cursor-pointer'
									>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M15 6C15 6 9 10.5 9 12C9 13.5 15 18 15 18'
												stroke='white'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
									</motion.div>

								<p className=' font-text text-sm text-accent dark:text-dark-accent'>
									{currentImage + 1}/{images.length}
								</p>

									<motion.div
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.9 }}
										transition={{ duration: 0.2 }}
										onClick={handleImageChange}
										className='w-[56px] flex justify-center items-center h-[40px] rounded-2xl bg-accent dark:bg-dark-accent bg-opacity-80 backdrop-blur-md hover:cursor-pointer'
									>
										<svg
											width='24'
											height='24'
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M9 6C9 6 15 10.5 15 12C15 13.5 9 18 9 18'
												stroke='white'
												strokeWidth='1.5'
												strokeLinecap='round'
											/>
										</svg>
									</motion.div>
							</div>
								)}
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}
