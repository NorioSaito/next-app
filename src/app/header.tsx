'use client';

import React from 'react';
import Image from 'next/image';
import { PopoverGroup } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Header() {
	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image src="/img/A-force_horizon.svg" alt="" width={200} height={970} />
					</Link>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-5">
					<Link href="/company" className="text-sm font-semibold leading-6 text-black">
						Company
					</Link>
					<div className="relative group">
						<Link
							href="/services"
							className="text-sm font-semibold leading-6 text-black flex items-center"
						>
							<span>Service</span>
							<ChevronDownIcon className="ml-1 h-5 w-4 text-orange-500" />
						</Link>
						<div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg hidden group-hover:block rounded-lg">
							<Link
								href="/services/si"
								className="block px-4 py-2 text-black text-sm font-normal hover:bg-gray-100 rounded-t-lg"
							>
								SI事業
							</Link>
							<Link
								href="/services/consulting"
								className="block px-4 py-2 text-black text-sm font-normal hover:bg-gray-100 rounded-b-lg"
							>
								コンサルティング事業
							</Link>
						</div>
					</div>
					<Link href="/products" className="text-sm font-semibold leading-6 text-black">
						Products
					</Link>
					<Link href="/education" className="text-sm font-semibold leading-6 text-black">
						Education
					</Link>
					<Link href="/products" className="text-sm font-semibold leading-6 text-black">
						News
					</Link>
					<Link href="/recruit" className="text-sm font-semibold leading-6 text-black">
						Recruit
					</Link>
					<Link href="/contact" className="text-sm font-semibold leading-6 text-black">
						Contact
					</Link>
				</PopoverGroup>
			</nav>
		</header>
	);
}
