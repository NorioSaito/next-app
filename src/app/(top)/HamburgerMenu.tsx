import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Square2StackIcon } from '@heroicons/react/24/outline';
import PATHS from '../../constants/paths';

const HamburgerMenu: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	// メニュー左列
	const leftMenuList = [
		{ key: 'home', text: 'Home', path: PATHS.INDEX },
		{ key: 'company', text: 'Company', path: PATHS.COMPANY },
		{ key: 'services', text: 'Service', path: PATHS.SERVICES },
		{ key: 'products', text: 'Products', path: PATHS.PRODUCTS },
		{ key: 'education', text: 'Education', path: PATHS.EDUCATION },
		{ key: 'news', text: 'News', path: PATHS.NEWS },
		{ key: 'recruit', text: 'Recruit', path: PATHS.RECRUIT },
	];

	// メニュー右列
	const rightMenuList = [
		{ key: 'contact', text: 'Contact', path: PATHS.CONTACT },
		{ key: 'privacypolicy', text: 'Privacy Policy', path: PATHS.PRIVACYPOLICY },
	];

	// Service小メニュー
	const serviceDetailMenu = [
		{ key: 'si', text: 'SI事業', path: PATHS.INDEX }, // ★リンク要修正
		{ key: 'consult', text: 'コンサルティング事業', path: PATHS.INDEX }, // ★リンク要修正
	];

	// Recruit小メニュー
	const recruitDetailMenu = [
		{ key: 'newgrad', text: '新卒採用', path: PATHS.INDEX }, // ★リンク要修正
		{ key: 'memberintro', text: '社員紹介', path: PATHS.INDEX }, // ★リンク要修正
		{ key: 'entry', text: 'エントリー', path: PATHS.INDEX }, // ★リンク要修正
	];

	return (
		<div className="relative">
			<button
				className="p-4 focus:outline-none"
				onClick={handleToggle}
			>
				<div className="space-y-1">
					<div className="w-8 h-1 bg-af-black"></div>
					<div className="w-8 h-1 bg-af-black"></div>
					<div className="w-8 h-1 bg-af-black"></div>
				</div>
			</button>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, x: '100%', y: '-100%' }}
					animate={{ opacity: 1, x: '0%', y: '0%' }}
					exit={{ opacity: 0, x: '100%' }}
					transition={{ duration: 0.5 }}
					className="fixed top-0 right-0 w-screen h-screen bg-af-black text-white pt-[92px] pl-[90px] pb-[70px] z-50 overflow-y-scroll HamburgerMenu"
				>
					<div className="flex">
						<Image className="flex justify-start mb-[42px]" src="top_hamburger_A-force.svg" alt="エイ・フォース株式会社" width={187} height={47}></Image>
						<button className="absolute right-[70px]" onClick={handleToggle}>
							<div className="space-y-1">
								<div className="w-[50px] h-1 bg-af-white transform rotate-45 translate-y-1.5"></div>
								<div className="w-[50px] h-1 bg-af-white transform -rotate-45 -translate-y-1.5"></div>
							</div>
						</button>
					</div>
					<div className="flex space-x-[160px]">
						<div className="flex flex-col">
							{leftMenuList.map((item) => {
								if (item.key === 'services') {
									return ( // Service
										<div key={item.key} className="mb-[40px]">
											<Link href={item.path} className="flex flex-col text-af-md">{item.text}</Link>
											{serviceDetailMenu.map((servicedetailitem) => <div key={servicedetailitem.key}>
												<Link href={servicedetailitem.path} className="flex flex-col text-af-sm my-[16px]">-{servicedetailitem.text}</Link>
											</div>)}
										</div>
									);
								} if (item.key === 'recruit') {
									return ( // Recruit
										<div key={item.key} className="mb-[40px]">
											<Link href={item.path} className="flex flex-col text-af-md">{item.text}</Link>
											{recruitDetailMenu.map((recruitdetailitem) => <div key={recruitdetailitem.key}>
												<Link href={recruitdetailitem.path} className="flex flex-col text-af-sm my-[16px]">-{recruitdetailitem.text}</Link>
											</div>)}
										</div>
									);
								}
								return ( // Home,Company,Products,Education,News
									<div key={item.key} className="mb-[40px]">
										<Link href={item.path} className="flex items-center text-af-md">
											{item.text}
											{item.key === 'education' || item.key === 'news' ? <Square2StackIcon className="w-[30px] h-[30px] ml-[8px]"/> : null}
										</Link>
									</div>
								);
							})}
						</div>
						<div className="flex flex-col">
							{rightMenuList.map((item) => ( // Contact,Privacy Policy
								<div key={item.key} className="mb-[40px]">
									<Link href={item.path} className="flex flex-col text-af-md">{item.text}</Link>
								</div>
							))}
						</div>
					</div>
				</motion.div>
			)}
		</div>
	);
};

export default HamburgerMenu;
