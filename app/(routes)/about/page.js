'use client';

import React from 'react';
import Name from '@/app/_components/name';
import Navbar from '@/app/_components/navbar';
import Footer from '@/app/_components/footer';
import pb from '../../_assets/_profile-picture/pb.jpg';
import Image from 'next/image';
import ListItem from './components/listItem';
import ToolIcon from './components/toolIcon';
import { motion } from 'framer-motion';
import { FigmaIcon } from '../../_assets/_icons/figma';
import { FramerIcon } from '../../_assets/_icons/framer';
import { ReactIcon } from '../../_assets/_icons/react';
import { NextIcon } from '../../_assets/_icons/next';
import { GithubIcon } from '../../_assets/_icons/github';
export default function About() {
	return (
		<div className='flex flex-col w-full min-h-screen font-text'>
			<div className='flex flex-col flex-1 justify-start items-center p-4 gap-4 min-w-full bg-bg dark:bg-dark-bg md:p-6'>
				<Name />
				<div className='flex w-full bg-accent dark:bg-dark-accent h-[1px]'></div>
				<Navbar />
				<div className='flex flex-wrap w-full lg:flex-row flex-col justify-between gap-12 pt-6'>
					<div className='flex w-full flex-1 flex-col gap-6'>
						<div className='flex w-full flex-row gap-8'>
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
								className='flex rounded-full bg-slate-500 overflow-hidden border-accent dark:border-dark-accent border-[1px]'
							>
								<Image
									className=''
									width={80}
									height={80}
									src={pb}
									alt='Profile picture'
								/>
							</motion.div>
							<div className='flex flex-col gap-4 w-full justify-end'>
								<div className='flex w-full text-primary-text dark:text-dark-primary-text font-display text-sm'>
									Tools i use on a daily
								</div>
								<div className='flex flex-row gap-4 w-full'>
									<FigmaIcon />
									<FramerIcon />
									<ReactIcon />
									<NextIcon />
									<GithubIcon />
									{/* <svg
										width='16'
										height='24'
										viewBox='0 0 16 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clip-path='url(#clip0_689_440925)'>
											<path
												d='M7.50011 20C7.50011 21.932 5.93223 23.5 4.00091 23.5C2.06959 23.5 0.501709 21.932 0.501709 20C0.501709 18.068 2.06959 16.5 4.00091 16.5H7.50011V20Z'
												stroke='#888888'
											/>
											<path
												d='M0.501709 12C0.501709 10.068 2.06959 8.5 4.00091 8.5H7.50011V15.5H4.00091C2.06959 15.5 0.501709 13.932 0.501709 12Z'
												stroke='#888888'
											/>
											<path
												d='M0.501709 4C0.501709 2.06805 2.06959 0.5 4.00091 0.5H7.50011V7.5H4.00091C2.06959 7.5 0.501709 5.93195 0.501709 4Z'
												stroke='#888888'
											/>
											<path
												d='M8.5 0.5H11.9992C13.9305 0.5 15.4984 2.06805 15.4984 4C15.4984 5.93195 13.9305 7.5 11.9992 7.5H8.5V0.5Z'
												stroke='#888888'
											/>
											<path
												d='M15.4984 12C15.4984 13.932 13.9305 15.5 11.9992 15.5C10.0679 15.5 8.5 13.932 8.5 12C8.5 10.068 10.0679 8.5 11.9992 8.5C13.9305 8.5 15.4984 10.068 15.4984 12Z'
												stroke='#888888'
											/>
										</g>
										<defs>
											<clipPath id='clip0_689_440925'>
												<rect width='16' height='24' fill='white' />
											</clipPath>
										</defs>
									</svg>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M4 0H20V8H12L4 0ZM4 8H12L20 16H4V8ZM4 16H12V24L4 16Z'
											fill='#888888'
										/>
									</svg>
									<svg
										width='27'
										height='24'
										viewBox='0 0 27 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clip-path='url(#clip0_689_440932)'>
											<path
												d='M11.0809 11.9733C11.0809 10.6434 12.1611 9.56315 13.491 9.56315C14.8209 9.56315 15.9012 10.6434 15.9012 11.9733C15.9012 13.3032 14.8209 14.3834 13.491 14.3834C12.1611 14.3834 11.0809 13.3032 11.0809 11.9733ZM26.9725 11.9733C26.9725 13.6297 25.0184 15.3052 21.8689 16.3471C21.7057 16.3999 21.5376 16.4527 21.3648 16.5055C21.4272 16.7504 21.48 16.9904 21.528 17.2257C21.8209 18.714 21.8689 20.0967 21.6625 21.2202C21.4416 22.4156 20.9423 23.2654 20.2221 23.6831C19.8621 23.8944 19.4348 24 18.9595 24C17.6536 24 15.9972 23.2126 14.2688 21.7243C14.024 21.513 13.7839 21.2922 13.539 21.0569C13.3518 21.2394 13.1646 21.4122 12.9773 21.5755C11.8347 22.5741 10.6584 23.3038 9.58295 23.6831C9.02123 23.8848 8.49311 23.9856 8.0226 23.9856C7.53289 23.9856 7.1008 23.88 6.73591 23.6687C5.358 22.8717 4.8779 20.5768 5.45883 17.5281C5.51644 17.2161 5.58846 16.8944 5.67007 16.5679C5.41562 16.4959 5.17076 16.4191 4.93551 16.3375C3.49999 15.8478 2.28051 15.1948 1.41152 14.4507C0.48971 13.6633 0 12.8039 0 11.9733C0 10.3793 1.74759 8.81899 4.68105 7.80116C5.00272 7.69073 5.3388 7.58511 5.68448 7.48429C5.60766 7.18182 5.54045 6.88415 5.48283 6.59129C5.19957 5.14136 5.14676 3.81146 5.3292 2.74082C5.53084 1.57416 6.00615 0.74357 6.71191 0.335478C8.14263 -0.495109 10.5768 0.359484 13.0541 2.56318C13.203 2.69761 13.3518 2.83684 13.5054 2.98087C13.7311 2.76482 13.9567 2.55838 14.1776 2.36153C15.2914 1.39172 16.4197 0.681156 17.4375 0.306672C18.5466 -0.10142 19.5068 -0.10142 20.2077 0.301871C21.6433 1.12766 22.1186 3.66263 21.4464 6.90816C21.408 7.105 21.36 7.30185 21.312 7.50349C21.6097 7.58991 21.8977 7.68113 22.1762 7.77715C23.5733 8.25726 24.7496 8.8814 25.585 9.57276C26.4924 10.3313 26.9725 11.1619 26.9725 11.9733ZM14.312 3.80186C15.0802 4.62764 15.8484 5.58786 16.5877 6.6441C17.86 6.76412 19.0747 6.95617 20.1981 7.21543C20.2414 7.03298 20.2846 6.85534 20.3182 6.6777C20.9471 3.61942 20.4046 1.747 19.6316 1.3005C19.2379 1.07484 18.5994 1.10365 17.8312 1.38691C16.943 1.71339 15.9396 2.35193 14.9314 3.23053C14.7249 3.40817 14.5185 3.60021 14.312 3.80186ZM7.096 15.7373C7.86417 15.9054 8.69475 16.0398 9.57815 16.1358C9.29009 15.6845 9.00682 15.2236 8.73316 14.7531C8.4643 14.2922 8.20985 13.8265 7.96979 13.3608C7.62891 14.1674 7.33125 14.9692 7.096 15.7373ZM8.73316 9.25108C9.00202 8.79018 9.27569 8.33408 9.55895 7.89238C8.70436 7.998 7.88337 8.14203 7.1104 8.31007C7.34565 9.06864 7.63372 9.85122 7.96979 10.6482C8.20985 10.1825 8.4643 9.71679 8.73316 9.25108ZM9.73179 14.177C10.1495 14.8972 10.5912 15.5981 11.0521 16.2655C11.8347 16.3135 12.6508 16.3423 13.491 16.3423C14.336 16.3423 15.1618 16.3135 15.9588 16.2559C16.3957 15.5981 16.8278 14.902 17.2551 14.1674C17.6776 13.4376 18.0665 12.7031 18.4169 11.9829C18.0665 11.2771 17.6824 10.557 17.2551 9.82241C16.8374 9.09745 16.4005 8.40609 15.954 7.74354C15.1522 7.68113 14.3264 7.65232 13.491 7.65232C12.6652 7.65232 11.8395 7.68593 11.0329 7.74835C10.5816 8.41089 10.1399 9.10705 9.72699 9.82721C9.31409 10.5426 8.93001 11.2723 8.57953 12.0021C8.93001 12.7271 9.31409 13.4568 9.73179 14.177ZM17.4279 16.1166C18.3161 16.011 19.1611 15.867 19.9437 15.6893C19.7036 14.9356 19.4012 14.1386 19.0363 13.3128C18.7914 13.7881 18.5274 14.2682 18.2537 14.7435C17.98 15.214 17.7064 15.6749 17.4279 16.1166ZM19.8861 8.32447C19.1083 8.14683 18.2825 8.0028 17.4231 7.89238C17.7016 8.32928 17.9752 8.78058 18.2441 9.24148C18.5178 9.71679 18.777 10.1873 19.0219 10.6482C19.3628 9.85122 19.6556 9.06864 19.8861 8.32447ZM11.9019 6.53847C12.4252 6.51447 12.9533 6.50006 13.4862 6.50006C14.0288 6.50006 14.5617 6.51447 15.0946 6.53847C14.5713 5.84232 14.0384 5.19897 13.5054 4.62284C12.9629 5.20377 12.4252 5.84712 11.9019 6.53847ZM6.61589 6.37044C6.6687 6.6441 6.73111 6.91776 6.80313 7.20102C7.92178 6.94657 9.13645 6.75932 10.4087 6.6393C11.1481 5.59746 11.9211 4.64205 12.7037 3.79706C12.5692 3.66743 12.4348 3.5426 12.3004 3.42737C9.95744 1.35331 8.06581 0.887602 7.29284 1.3341C6.89915 1.55975 6.60628 2.13108 6.46705 2.93766C6.30862 3.86907 6.35663 5.05974 6.61589 6.37044ZM7.30724 12.0069C6.77432 10.845 6.32782 9.69758 5.99175 8.59814C5.67007 8.68936 5.36281 8.78538 5.06514 8.891C2.36693 9.83201 1.15706 11.1187 1.15706 11.9781C1.15706 12.8711 2.45815 14.2778 5.30999 15.2524C5.52604 15.3244 5.74689 15.3965 5.97734 15.4637C6.31822 14.345 6.76472 13.1832 7.30724 12.0069ZM12.7325 20.236C11.9403 19.391 11.1625 18.4259 10.4183 17.3745C9.10285 17.2689 7.88337 17.0912 6.78873 16.8464C6.71191 17.1537 6.64949 17.4513 6.59188 17.7394C6.05896 20.548 6.57268 22.238 7.31204 22.6653C8.08502 23.1118 9.95264 22.6893 12.2235 20.7017C12.3868 20.5576 12.5596 20.3992 12.7325 20.236ZM15.1186 17.4561C14.5857 17.4801 14.0384 17.4945 13.491 17.4945C12.9533 17.4945 12.43 17.4849 11.9163 17.4657C12.4492 18.1667 12.9917 18.8148 13.539 19.4054C14.0624 18.8244 14.5953 18.1763 15.1186 17.4561ZM20.4046 17.4513C20.3614 17.2353 20.3134 17.0192 20.2558 16.7936C19.1419 17.0528 17.9128 17.2401 16.6069 17.3553C15.8628 18.4355 15.0994 19.4006 14.3456 20.2264C14.5713 20.4472 14.8017 20.6536 15.0226 20.8457C17.1879 22.7085 18.9066 23.1118 19.6508 22.6797C20.4238 22.238 20.9903 20.4088 20.4046 17.4513ZM25.825 11.9733C25.825 11.5172 25.4793 10.9795 24.8504 10.4562C24.1254 9.85122 23.0692 9.29909 21.8065 8.8622C21.5472 8.77578 21.2784 8.68936 21.0047 8.60774C20.6734 9.67838 20.2317 10.8162 19.6892 11.9781C20.2558 13.1736 20.7167 14.321 21.0527 15.3917C21.2064 15.3437 21.36 15.2956 21.5088 15.2476C24.4711 14.2682 25.825 12.8615 25.825 11.9733Z'
												fill='#888888'
											/>
										</g>
										<defs>
											<clipPath id='clip0_689_440932'>
												<rect width='26.9725' height='24' fill='white' />
											</clipPath>
										</defs>
									</svg>
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M11.2141 0.00255319C11.1625 0.00724527 10.9982 0.0236676 10.8504 0.0353978C7.44164 0.342729 4.24868 2.18203 2.22639 5.009C1.10029 6.58085 0.380059 8.36384 0.107918 10.2524C0.0117302 10.9116 0 11.1064 0 12.0002C0 12.894 0.0117302 13.0888 0.107918 13.748C0.760117 18.2548 3.96716 22.0413 8.31672 23.4442C9.0956 23.6952 9.91672 23.8665 10.8504 23.9697C11.2141 24.0096 12.7859 24.0096 13.1496 23.9697C14.7613 23.7914 16.1267 23.3926 17.4733 22.7052C17.6798 22.5996 17.7196 22.5715 17.6915 22.548C17.6727 22.5339 16.793 21.3539 15.7372 19.9275L13.8182 17.3351L11.4135 13.7762C10.0903 11.8196 9.00176 10.2196 8.99238 10.2196C8.98299 10.2172 8.97361 11.7984 8.96891 13.7292C8.96188 17.1099 8.95953 17.246 8.9173 17.3257C8.85631 17.4407 8.80938 17.4876 8.71085 17.5392C8.63578 17.5767 8.57009 17.5838 8.21584 17.5838H7.80997L7.70205 17.5157C7.63167 17.4712 7.58006 17.4125 7.54487 17.3445L7.4956 17.2389L7.50029 12.5351L7.50733 7.82895L7.58006 7.73745C7.6176 7.68818 7.69736 7.62484 7.75367 7.59434C7.84985 7.54742 7.88739 7.54273 8.29326 7.54273C8.77185 7.54273 8.85161 7.5615 8.97595 7.69757C9.01114 7.7351 10.3132 9.6964 11.871 12.0589C13.4287 14.4213 15.5589 17.6471 16.6053 19.2307L18.5056 22.1093L18.6018 22.046C19.4534 21.4923 20.3543 20.704 21.0674 19.8829C22.5853 18.1398 23.5636 16.0143 23.8921 13.748C23.9883 13.0888 24 12.894 24 12.0002C24 11.1064 23.9883 10.9116 23.8921 10.2524C23.2399 5.74566 20.0328 1.95915 15.6833 0.556219C14.9161 0.307539 14.0997 0.136278 13.1848 0.0330517C12.9595 0.00959131 11.4088 -0.0162151 11.2141 0.00255319ZM16.1267 7.2612C16.2393 7.31751 16.3308 7.42543 16.3636 7.53804C16.3824 7.59903 16.3871 8.90343 16.3824 11.843L16.3754 16.0612L15.6317 14.921L14.8856 13.7809V10.7146C14.8856 8.73217 14.895 7.6178 14.9091 7.56384C14.9466 7.43246 15.0287 7.32924 15.1413 7.26824C15.2375 7.21897 15.2727 7.21428 15.6411 7.21428C15.9883 7.21428 16.0493 7.21898 16.1267 7.2612Z'
											fill='#888888'
										/>
									</svg>
									<svg
										width='26'
										height='24'
										viewBox='0 0 26 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<g clip-path='url(#clip0_689_440934)'>
											<path
												d='M13.2585 0C6.47396 0 0.972412 5.50136 0.972412 12.2878C0.972412 17.717 4.49275 22.323 9.37443 23.9478C9.98842 24.0615 10.2139 23.6812 10.2139 23.3566C10.2139 23.0637 10.2024 22.0956 10.1972 21.0689C6.77913 21.8122 6.05789 19.6191 6.05789 19.6191C5.49901 18.1988 4.69375 17.8212 4.69375 17.8212C3.57908 17.0585 4.77777 17.0741 4.77777 17.0741C6.01154 17.1608 6.66118 18.3404 6.66118 18.3404C7.75696 20.219 9.53534 19.6758 10.2364 19.362C10.3467 18.5677 10.6651 18.0257 11.0165 17.7188C8.28761 17.408 5.41884 16.3544 5.41884 11.6461C5.41884 10.3046 5.8988 9.20837 6.68479 8.34788C6.55721 8.03833 6.13671 6.78859 6.80379 5.09602C6.80379 5.09602 7.8355 4.76575 10.1834 6.35559C11.1633 6.08325 12.2144 5.94678 13.2585 5.94216C14.3026 5.94678 15.3545 6.08325 16.3364 6.35559C18.6814 4.76575 19.7117 5.09602 19.7117 5.09602C20.3804 6.78859 19.9597 8.03833 19.8321 8.34788C20.6199 9.20837 21.0965 10.3045 21.0965 11.6461C21.0965 16.3656 18.2224 17.4049 15.4866 17.709C15.9272 18.0903 16.3199 18.8382 16.3199 19.9845C16.3199 21.6286 16.3056 22.9519 16.3056 23.3566C16.3056 23.6836 16.5268 24.0668 17.1496 23.9461C22.0286 22.3195 25.5445 17.7152 25.5445 12.2878C25.5445 5.50136 20.0437 0 13.2585 0Z'
												fill='#888888'
											/>
											<path
												d='M5.57394 17.5043C5.54696 17.5653 5.45079 17.5836 5.3634 17.5418C5.27427 17.5017 5.22416 17.4184 5.25307 17.3571C5.27957 17.2943 5.37573 17.2767 5.46467 17.3189C5.55399 17.3589 5.60487 17.443 5.57394 17.5043ZM6.1783 18.0436C6.11971 18.0979 6.00514 18.0727 5.92738 17.9868C5.84702 17.9011 5.83199 17.7866 5.89144 17.7314C5.95186 17.6772 6.06296 17.7025 6.14351 17.7883C6.22387 17.8749 6.23948 17.9887 6.1782 18.0437M6.59292 18.7336C6.51757 18.7859 6.39443 18.7369 6.3184 18.6276C6.24314 18.5184 6.24315 18.3873 6.32004 18.3348C6.39635 18.2823 6.51757 18.3295 6.59466 18.4379C6.66982 18.549 6.66982 18.6801 6.59283 18.7337M7.29402 19.5328C7.22667 19.607 7.08329 19.5871 6.97826 19.4858C6.87092 19.3867 6.84095 19.2461 6.9085 19.1718C6.97662 19.0974 7.12087 19.1183 7.22667 19.2188C7.33334 19.3177 7.36581 19.4594 7.29402 19.5328ZM8.20017 19.8026C8.17059 19.8988 8.03241 19.9426 7.89327 19.9017C7.75432 19.8596 7.66336 19.7468 7.6914 19.6496C7.72031 19.5527 7.85907 19.5072 7.99927 19.5509C8.13802 19.5928 8.22908 19.7047 8.20017 19.8026ZM9.23159 19.917C9.23505 20.0184 9.11702 20.1024 8.97094 20.1043C8.82399 20.1074 8.70518 20.0254 8.70364 19.9258C8.70364 19.8234 8.81898 19.7402 8.96583 19.7378C9.11191 19.7349 9.23159 19.8163 9.23159 19.917ZM10.2447 19.8782C10.2622 19.9771 10.1607 20.0786 10.0156 20.1056C9.87304 20.1316 9.74103 20.0706 9.72282 19.9726C9.70509 19.8712 9.80858 19.7698 9.9509 19.7435C10.0962 19.7182 10.2262 19.7777 10.2447 19.8782Z'
												fill='#888888'
											/>
										</g>
										<defs>
											<clipPath id='clip0_689_440934'>
												<rect
													width='24.6676'
													height='24'
													fill='white'
													transform='translate(0.972412)'
												/>
											</clipPath>
										</defs>
									</svg> */}
								</div>
							</div>
						</div>
						<div className='flex flex-1 flex-col gap-6 text-primary-text dark:text-dark-primary-text'>
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
						className='flex flex-1 justify-start flex-col max-md:border-t-[1px] max-md:border-accent dark:max-md:border-dark-accent lg:pt-[108px] gap-10 max-md:pt-6'
					>
						<div className='flex flex-row justify-space'>
							<div className='flex max-md:w-1/2 md:w-1/3 flex-col'>
								<p className='text-sm text-primary-text dark:text-dark-primary-text'>
									Location
								</p>
								<p className='text-secondary-text dark:text-dark-secondary-text text-sm'>
									Copenhagen,
								</p>
								<p className='text-secondary-text dark:text-dark-secondary-text text-sm'>
									Denmark
								</p>
							</div>
							<div className='flex max-lg:w-1/2 lg:w-2/3 flex-col lg:justify-end'>
								<p className='text-sm text-primary-text dark:text-dark-primary-text'>
									Contact
								</p>
								<a href='mailto:jdemuth18@gmail.com'>
									<motion.p
										whileHover={{ x: 5 }}
										className='text-sm text-secondary-text dark:text-dark-secondary-text hover:text-accent dark:hover:text-dark-accent hover:cursor-pointer'
									>
										M jdemuth18@gmail.com
									</motion.p>
								</a>
								<a
									href='https://instagram.com/_joachimdemuth'
									target='_blank'
									rel='noopener noreferrer'
								>
									<motion.p
										whileHover={{ x: 5 }}
										className='text-sm text-secondary-text dark:text-dark-secondary-text hover:text-accent dark:hover:text-dark-accent hover:cursor-pointer'
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
										className='text-sm text-secondary-text dark:text-dark-secondary-text hover:text-accent dark:hover:text-dark-accent hover:cursor-pointer'
									>
										X @poetenpoul
									</motion.p>
								</a>
							</div>
						</div>
						<div className='flex flex-col gap-2'>
							<p className='text-sm text-primary-text dark:text-dark-primary-text'>
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
							<p className='text-sm text-primary-text dark:text-dark-primary-text'>
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
