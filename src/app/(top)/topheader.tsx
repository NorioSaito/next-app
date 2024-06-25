'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PopoverGroup } from '@headlessui/react';
import { Square2StackIcon } from '@heroicons/react/24/outline';
import PATHS from '../../constants/paths';
import HamburgerMenu from './HamburgerMenu';

function Topheader() {
	// const [isMenuOpen, setIsMenuOpen] = useState(false);

	const topHeaderMenu = [
		{ key: 'company', text: 'Company', path: PATHS.COMPANY },
		{ key: 'services', text: 'Service', path: PATHS.SERVICES },
		{ key: 'products', text: 'Products', path: PATHS.PRODUCTS },
		{ key: 'education', text: 'Education', path: PATHS.EDUCATION },
		{ key: 'news', text: 'News', path: PATHS.NEWS },
		{ key: 'recruit', text: 'Recruit', path: PATHS.RECRUIT },
		{ key: 'contact', text: 'Contact', path: PATHS.CONTACT },
	];

	return (

		<header>
			<nav className="flex px-20 py-16">
				<div className="w-1/2">
					<Link href={PATHS.INDEX} className="m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image src="A-force_horizon.svg" alt="エイ・フォース株式会社" width={187} height={47}></Image>
					</Link>
				</div>
				<div className="w-1/2 flex justify-end">
					<PopoverGroup>
						{topHeaderMenu.map((item) => (item.key === 'education' || item.key === 'news' ? (
							<div key={item.key}>
								<Link href={item.path} className="flex items-center space-x-1 text-left text-af-xs">
									<span>{item.text}</span>
									<Square2StackIcon className="h-4 w-4"></Square2StackIcon>
								</Link>
							</div>
						) : (
							<div key={item.key}>
								<Link href={item.path} className="text-af-xs">
									{item.text}
								</Link>
							</div>
						)))}
					</PopoverGroup>
					<div>
						{/* 20240620時点でハンバーガーメニュー処理未実装 */}
						<HamburgerMenu />
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Topheader;
