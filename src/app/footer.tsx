import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PATHS from '../constants/paths';
import { PopoverGroup } from '@headlessui/react';


function footer() {

	const footerMenu = [
		{ key: 'home', text: 'Home', path: PATHS.INDEX },
		{ key: 'company', text: 'Company', path: PATHS.COMPANY },
		{ key: 'services', text: 'Service', path: PATHS.SERVICES },
		{ key: 'products', text: 'Products', path: PATHS.PRODUCTS },
		{ key: 'recruit', text: 'Recruit', path: PATHS.RECRUIT },
		{ key: 'contact', text: 'Contact', path: PATHS.CONTACT },
		{ key: 'privacypolicy', text: 'Privacy Policy', path: PATHS.CONTACT },
	];
	
	// const returnTop = () => {
	// 	window.scrollTo({
	// 	  top: 0,
	// 	  behavior: 'smooth'
	// 	})
	//   }

	return (
		<footer className="bg-black pt-8 h-[534px] flex">
			<div className="w-1/2">
					<div className="relative flex ml-20">
						<Image className="pt-4" src="Alogo.svg" alt="" width={346.71} height={270.3}  />
						<Image className="absolute bottom-0 right-0" src="footer_catchcopy.svg" alt="" width={329.29} height={76} />
					</div>
					<div className="relative flex ml-20 mt-6 mr-4" >
						<Image src="footer_A-force.svg" alt="" width={198} height={47} />
						<Image className="ml-6" src="footer_copyright.svg" alt="" width={339} height={52} />
						<Image className="ml-6" src="footer_privacy.svg" alt="" width={72} height={85.15} />
					</div>
					<div className="ml-20 mt-2">
						<Image src="footer_facebook.svg" alt="" width={40} height={40} />
					</div>
			</div>
			<div className="w-1/2 flex flex-col justify-between">
				<div className="relative flex justify-end">
					<div className="relative flex flex-col" >
						<Image className="absolute right-10 mt-4" src="footer_chevronup.svg" alt="" width={25.41} height={10.67}></Image>
						<p className="right-10 mt-8 mr-6 text-white">Page Top</p>
					</div>
				</div>
				<nav className="relative flex justify-end">
					<PopoverGroup className="absolute bottom-16 right-10 flex flex-col items-end text-white">
						{footerMenu.map((item) => (
							<Link className="m-1 text-left w-full" key={item.key} href={item.path}>
								{item.text}
							</Link>
						))}
					</PopoverGroup>
				</nav>
			</div>
		</footer>
	);
}

export default footer;
