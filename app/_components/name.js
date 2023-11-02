import React, { useContext } from 'react';
import { ThemeContext } from '../_contexts/theme-provider';
import Link from 'next/link';
import { motion } from 'framer-motion';



const pathVariants = {
	hidden: {
		opacity: 0,
	},
	visible: (index) => ({
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
			delay: index,
		},
	}),
	hover: {
		opacity:0,
		transition: {
			duration:0.3,
			ease: 'easeInOut',
		}
	}
};

const Path = (props) => (
	<motion.path
		fill={props.isDarkMode ? '#FFFFFF' : '#393939'}
		d={props.variants.d}
		variants={pathVariants}
		animate='visible'
		initial='hidden'

		custom={props.index}
	/>
);

export default function Name() {
	const { isDarkMode, toggleTheme } = useContext(ThemeContext);

	return (
		<div className='name flex w-full gap-2 md:gap-6 '>
			<div className='flex flex-1  '>
				{/* <Link href='/' className='flex flex-1'> */}
				<motion.svg
					// initial={{ opacity: 0, y: 10 }}
					// animate={{ opacity: 1, y: 0 }}
					// transition={{ duration: 0.2 }}
					width='100%'
					style={{ height: 'auto' }}
					viewBox='0 0 820 140'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<Path
						isDarkMode={isDarkMode}
						index={Math.random() * 0.7 + 0.1}
						variants={{
							d: 'M671.217 138V2H706.83L746.202 126.4L785.376 2H820V138H800.215V15.8L761.436 138H729.385L690.606 16.2V138H671.217Z',
						}}
					/>
					<Path
						isDarkMode={isDarkMode}
						index={Math.random() * 0.7 + 0.1}
						variants={{
							d: 'M628.517 138V2H648.698V138H628.517Z',
						}}
					/>
					<Path
						isDarkMode={isDarkMode}
						index={Math.random() * 0.7 + 0.1}
						variants={{
							d: 'M495.78 138V2H515.961V58.8H585.802V2H605.982V138H585.802V77.6H515.961V138H495.78Z',
						}}
					/>
					<Path
						isDarkMode={isDarkMode}
						index={Math.random() * 0.7 + 0.1}
						variants={{
							d: 'M420.466 140C384.062 140 356.758 113.8 356.758 70C356.758 26.2 384.062 0 420.466 0C453.309 0 474.479 21.2 478.238 49.6H457.662C454.496 30 439.855 18.6 420.268 18.6C394.943 18.6 377.533 37.4 377.533 66.6V73.4C377.533 102.6 394.943 121.4 420.268 121.4C439.855 121.4 454.496 110 457.662 90.4H478.238C474.479 118.6 453.309 140 420.466 140Z',
						}}
					/>
					<Path
						isDarkMode={isDarkMode}
						index={Math.random() * 0.7 + 0.1}
						variants={{
							d: 'M308.285 2L354.384 138H333.214L320.156 98.8H263.571L250.711 138H229.541L275.838 2H308.285ZM269.705 80.2H314.023L299.382 35.8L292.062 12.4H291.666L284.345 35.8L269.705 80.2Z',
						}}
					/>
					<Path
						isDarkMode={isDarkMode}
						index={Math.random() * 0.7 + 0.1}
						variants={{
							d: 'M164.441 140C127.641 140 101.525 112.2 101.525 70C101.525 27.8 127.641 0 164.441 0C201.241 0 227.555 27.8 227.555 70C227.555 112.2 201.241 140 164.441 140ZM122.299 73.4C122.299 102.6 139.512 121.4 164.441 121.4C189.37 121.4 206.781 102.6 206.781 73.4V66.6C206.781 37.4 189.37 18.6 164.441 18.6C139.512 18.6 122.299 37.4 122.299 66.6V73.4Z',
						}}
					/>
					<Path
						isDarkMode={isDarkMode}
						index={Math.random() * 0.7 + 0.1}
						variants={{
							d: 'M84.4818 94.8C84.4818 123.2 69.6431 140 42.5377 140C17.6086 140 0 126.2 0 94.4H19.3893C19.3893 112.4 27.3032 121.4 42.3398 121.4C56.9807 121.4 64.3011 112.8 64.3011 94.4V2H84.4818V94.8Z',
						}}
					/>
				</motion.svg>
				{/* </Link> */}
			</div>
			<div className='flex flex-1'>
				<Link href='/' className='flex flex-1'>
					<motion.svg
						// initial={{ opacity: 0, y: 10 }}
						// animate={{ opacity: 1, y: 0 }}
						// transition={{ duration: 0.2 }}
						width='100%'
						style={{ height: 'auto' }}
						viewBox='0 0 820 140'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<Path
							isDarkMode={isDarkMode}
							index={Math.random() * 0.7 + 0.1}
							variants={{
								d: 'M708.44 137.971V0H728.869V57.6232H799.571V0H820V137.971H799.571V76.6957H728.869V137.971H708.44Z',
							}}
						/>
						<Path
							isDarkMode={isDarkMode}
							index={Math.random() * 0.7 + 0.1}
							variants={{
								d: 'M619.459 137.971V18.8696H576.597V0H682.75V18.8696H639.888V137.971H619.459Z',
							}}
						/>
						<Path
							isDarkMode={isDarkMode}
							index={Math.random() * 0.7 + 0.1}
							variants={{
								d: 'M497.973 140C464.926 140 443.495 120.522 443.495 83.3913V0H463.924V82.1739C463.924 107.942 475.541 121.13 497.973 121.13C520.405 121.13 532.022 107.942 532.022 82.1739V0H552.452V83.3913C552.452 120.522 531.021 140 497.973 140Z',
							}}
						/>
						<Path
							isDarkMode={isDarkMode}
							index={Math.random() * 0.7 + 0.1}
							variants={{
								d: 'M261.391 137.971V0H297.443L337.3 126.203L376.957 0H412.008V137.971H391.979V14L352.722 137.971H320.276L281.019 14.4058V137.971H261.391Z',
							}}
						/>
						<Path
							isDarkMode={isDarkMode}
							index={Math.random() * 0.7 + 0.1}
							variants={{
								d: 'M140.084 137.971V0H231.616V18.8696H160.513V58.029H226.008V76.4928H160.513V119.101H231.616V137.971H140.084Z',
							}}
						/>
						<Path
							isDarkMode={isDarkMode}
							index={Math.random() * 0.7 + 0.1}
							variants={{
								d: 'M0 137.971V0H43.2622C81.9177 0 111.761 24.5507 111.761 68.9855C111.761 113.42 81.9177 137.971 43.2622 137.971H0ZM20.4294 119.101H41.6599C71.703 119.101 90.7304 100.435 90.7304 72.4348V65.5362C90.7304 37.5362 71.703 18.8696 41.6599 18.8696H20.4294V119.101Z',
							}}
						/>
					</motion.svg>
				</Link>
			</div>
		</div>
	);
}
