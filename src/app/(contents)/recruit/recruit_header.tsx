'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function RecruitHeader() {
	return (
		<header className="fixed top-0 bg-af-white w-[100%] max-w-[1440px] h-[80px] flex justify-between items-center px-[8rem] shadow-md z-30">
			<nav className="flex items-center">
				<Link href="/recruit" className="flex items-center">
					<Image src="/A-force_horizon.svg" alt="" width={200} height={970} />
					<p className="text-af-xs flex items-center ml-2">RECRUIT SITE</p>
				</Link>
			</nav>
			<div className="flex items-center">
				<button className="bg-af-yellow text-af-black rounded-full w-[9.6rem] h-[4rem] px-[3rem] py-[1.2rem] mr-[1.6rem]">
					ENTRY
				</button>
				<button className="bg-af-black text-white rounded-full w-[9.6rem] h-[4rem] px-[3rem] py-[1.2rem]">
					MENU
				</button>
			</div>
		</header>
	);
}
