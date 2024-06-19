import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PopoverGroup } from '@headlessui/react';
import { Square2StackIcon } from '@heroicons/react/24/outline';
import PATHS from '../../constants/paths';

function topheader() {
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
			<nav>
				<div>
					<Link href={PATHS.INDEX} className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image src="A-force_horizon.svg" alt="" width={187} height={47}></Image>
					</Link>
				</div>
				<PopoverGroup>
					{topHeaderMenu.map((item) => (item.key === 'education' || item.key === 'news' ? (
						<div key={item.key}>
							<Link href={item.path}>
								{item.text}
								<Square2StackIcon className="h-5"></Square2StackIcon>
							</Link>
						</div>
					) : (
						<div key={item.key}>
							<Link href={item.path}>
								{item.text}
							</Link>
						</div>
					)))}
				</PopoverGroup>
			</nav>
		</header>
	);
}

export default topheader;
