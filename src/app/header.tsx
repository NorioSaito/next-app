'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import PATHS from '../constants/paths';

const headerMenu = [
	{ key: 'company', text: 'Company', path: PATHS.COMPANY },
	{ key: 'services', text: 'Services', path: PATHS.SERVICES },
	{ key: 'products', text: 'Products', path: PATHS.PRODUCTS },
	{ key: 'recruit', text: 'Recruit', path: PATHS.RECRUIT },
	{ key: 'contact', text: 'Contact', path: PATHS.CONTACT },
];
export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href={PATHS.INDEX} className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image src="A-force_horizon.svg" alt="" width={200} height={970} />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<PopoverGroup className="hidden lg:flex lg:gap-x-12">
					{headerMenu.map((item) => (
						<Link
							key={item.key}
							href={item.path}
							className="text-sm font-semibold leading-6 text-gray-900"
						>
							{item.text}
						</Link>
					))}
				</PopoverGroup>
			</nav>
			<Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<Link href={PATHS.INDEX} className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<Image src="A-force_horizon.svg" alt="" width={200} height={97} />
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{headerMenu.map((item) => (
									<Link
										key={item.key}
										href={item.path}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.text}
									</Link>
								))}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
