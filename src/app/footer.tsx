'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PopoverGroup } from '@headlessui/react';
import { Square2StackIcon } from '@heroicons/react/24/outline';
import PATHS from '../constants/paths';
import Harftitle from './_components/common/HarfTitle';
import Button from './_components/common/Button';

function footer() {
	const footerMenu = [
		{ key: 'home', text: 'Home', path: PATHS.INDEX },
		{ key: 'company', text: 'Company', path: PATHS.COMPANY },
		{ key: 'services', text: 'Service', path: PATHS.SERVICES },
		{ key: 'products', text: 'Products', path: PATHS.PRODUCTS },
		{ key: 'education', text: 'Education', path: PATHS.EDUCATION },
		{ key: 'news', text: 'News', path: PATHS.NEWS },
		{ key: 'recruit', text: 'Recruit', path: PATHS.RECRUIT },
		{ key: 'contact', text: 'Contact', path: PATHS.CONTACT },
		{ key: 'privacypolicy', text: 'Privacy Policy', path: PATHS.PRIVACYPOLICY },
	];

	// const returnTop = () => {
	// 	window.scrollTo({
	// 		top: 0,
	// 		behavior: 'smooth',
	// 	});
	// };

	return (
		<footer>
			{/* お問い合わせ、電話番号欄 */}
			<section className="grid grid-cols-1 md:grid-cols-2 w-full bg-af-gray">
				<div className="grid gap-[32px] text-center border border-black py-[15%]">
					<Harftitle title="Contact" subTitle="お問い合わせ" text_position="center" />
					<div>
						<p className="">プロダクト開発、サービスについての</p>
						<p>ご相談、ご質問などご気軽にお問い合わせください。</p>
					</div>
					<div className="grid justify-center">
						<Button title="ニュース一覧へ" link=""></Button>
					</div>
				</div>
				<div className="grid gap-[32px] text-center border border-black py-[15%]">
					<Harftitle title="Phone" subTitle="お電話" text_position="center" />
					<div>
						<p>お電話でのお問い合わせはこちらからどうぞ</p>
					</div>
					<div>
						<p className="text-4xl font-bold">03-5216-2868</p>
					</div>
				</div>
			</section>
			<section className="bg-black  pt-8 h-[534px] flex">
				<div className="w-1/2 pl-20">
					<div className="relative flex ml-20">
						<Image
							className="pt-4"
							src="/img/Alogo.svg"
							alt=""
							width={346.71}
							height={270.3}
						/>
						<Image
							className="absolute bottom-0 right-0"
							src="/img/footer_catchcopy.svg"
							alt=""
							width={329.29}
							height={76}
						/>
					</div>
					<div className="relative flex ml-20 mt-6 mr-4">
						<Image src="/img/footer_A-force.svg" alt="" width={198} height={47} />
						<Image
							className="ml-6"
							src="/img/footer_copyright.svg"
							alt=""
							width={339}
							height={52}
						/>
						<Image
							className="ml-6"
							src="/img/footer_privacy.svg"
							alt=""
							width={72}
							height={85.15}
						/>
					</div>
					<div className="ml-20 mt-2">
						<Image src="/img/footer_facebook.svg" alt="" width={40} height={40} />
					</div>
				</div>
				<div className="w-1/2 flex flex-col justify-between pr-20">
					<div className="relative flex justify-end pr-9">
						<div className="relative flex flex-col">
							<Image
								className="absolute right-10 mt-4"
								src="/img/footer_chevronup.svg"
								alt=""
								width={25.41}
								height={10.67}
							></Image>
							<p className="right-10 mt-8  text-white">Page Top</p>
						</div>
					</div>
					<nav className="relative flex justify-end">
						<PopoverGroup className="absolute bottom-16 right-10 flex flex-col items-end text-white">
							{footerMenu.map((item) =>
								item.key === 'education' ? (
									<Link
										className="m-1 text-left w-full flex"
										key={item.key}
										href={item.path}
										target="_blank"
										rel="noopener"
									>
										{item.text}
										<Square2StackIcon className="h-5"></Square2StackIcon>
									</Link>
								) : (
									<Link
										className="m-1 text-left w-full"
										key={item.key}
										href={item.path}
									>
										{item.text}
									</Link>
								),
							)}
						</PopoverGroup>
					</nav>
				</div>
			</section>
		</footer>
	);
}

export default footer;
