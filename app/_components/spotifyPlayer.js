'use client';
import React, { useState, useEffect } from 'react';
// import Lottie from 'lottie-react';
// import sound from '../_assets/_lottie/sound.json';
import { motion } from 'framer-motion';
import Link from 'next/link';

const modalVariant = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,

		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	exit: {
		opacity: 0,
		y: -10,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const imageVariant = {
	hidden: {
		transform: 'rotate(0deg)',
	},
	visible: {
		transform: 'rotate(360deg)',
		transition: {
			duration: 5,
			repeat: Infinity,
			ease: 'linear',
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

export default function SpotifyPlayer() {
	const [hover, setHover] = useState(false);
	const [data, setData] = useState(null);
	const [width, setWidth] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);

	let hoverTimeout;
	useEffect(() => {
		if(!isPlaying) return;
		const playerWidth = document.getElementById('player').offsetWidth;
		setWidth(playerWidth);
	}, [isPlaying]);

	useEffect(() => {
		const getSong = async () => {
			const res = await fetch('/api/nowPlaying', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});
			const data = await res.json();
			setData(data);
			setIsPlaying(data.is_playing);
			console.log(data);
		};
		getSong();
	}, []);

	const handleMouseLeave = () => {
		hoverTimeout = setTimeout(() => {

		setHover(false);

		}, 500);
	}

	const handleMouseEnter = () => {
		clearTimeout(hoverTimeout);
		setHover(true);
	}

	return (
		data &&
		data.is_playing && (
			<div
				id='player'
				className='flex rounded-lg relative gap px-2 flex-row gap-2 h-8 max-w-[200px] xl:max-w-[300px] items-center bg-project-item-bg dark:bg-primary-text whitespace-nowrap shadow-inner justify-start select-none'
				style={{ boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.25) inset' }}
				onMouseEnter={() => handleMouseEnter()}
				onMouseLeave={() => handleMouseLeave()}
			>
				<div className='flex aspect-square justify-center items-center w-5 h-5'>

				<motion.img
					variants={imageVariant}
					animate='visible'
					initial='hidden'
					exit='exit'
					src={data.item.album.images[0].url}
					className='rounded-full aspect-square w-5'
					/>
					</div>

				<div
					className='flex py-2 flex-row overflow-clip marquee gap-4'
					
				>
					<p
						className='marquee-text overflow-ellipsis animate-[marquee_5s_linear_infinite] text-accent dark:text-[#ffd08b]'
						style={{
							textShadow:
								'4px 0px 12.399999618530273px rgba(255, 138, 0, 0.79)',
						}}
					>
						{data.item.artists[0].name} - {data.item.name}
					</p>
					<p
						className='marquee-text overflow-ellipsis animate-[marquee_5s_linear_infinite] text-accent dark:text-[#ffd08b] '
						aria-hidden='true'
	
						style={{
							textShadow:
								'4px 0px 12.399999618530273px rgba(255, 138, 0, 0.79)',
						}}
					>
						{data.item.artists[0].name} - {data.item.name}
					</p>
				</div>
				{hover && (
					<motion.div
						variants={modalVariant}
						animate='visible'
						initial='hidden'
						exit='exit'
						className={`flex flex-col mt-2 shadow-2xl gap-2 absolute items-center top-full z-20 right-0 'w-['${width}'] h-auto bg-project-item-bg dark:bg-dark-project-item-bg bg-opacity-80 backdrop-blur-md rounded-lg p-2 `}
					>
						<div className=' flex justify-center items-center overflow-clip w-full h-auto p-4 select-none'>
							<motion.img
								variants={imageVariant}
								animate='visible'
								initial='hidden'
								exit='exit'
								src={data.item.album.images[0].url}
								className='rounded-full w-full aspect-square select-none'
							/>
							
						</div>
						<div className='flex flex-row w-full justify-between'>
							<div className='flex flex-col gap-1'>
								<p className='font-display font-bold text-accent  select-none'>
									{data.item.artists[0].name}
								</p>
								<p className=' font-display text-primary-text dark:text-white select-none'>
									{data.item.name}
								</p>
							</div>
							{/* <div className='flex justify-end items-end'>
								<Link href='/music'>
									<p className='font-text text-accent underline'>
										Go to history
									</p>
								</Link>
							</div> */}
						</div>
					</motion.div>
				)}
			</div>
		)
	);
}
