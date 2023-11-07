'use client';
import React, { useEffect } from 'react';
import ProjectItem from './_components/projectItem';
import Footer from './_components/footer';
import projectData from './_utils/project.json';
import Name from './_components/name';
import Navbar from './_components/navbar';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<div className='flex flex-col w-full min-h-screen relative'>
			<div className='flex flex-col flex-1 justify-start items-center gap-4 min-w-full bg-bg dark:bg-dark-bg p-4 md:p-6'>
				<Name />
				<div className='flex w-full bg-accent dark:bg-dark-accent h-[1px]'></div>
				<Navbar />
				<div className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full justify-between gap-6 gap-y-10'>
					{projectData.map((project) => (
						<Link key={project.id} href={`/project/${project.slug}`}>
							<ProjectItem key={project.id} project={project} />
						</Link>
					))}
				</div>
			</div>

			<Footer />
		</div>
	);
}
