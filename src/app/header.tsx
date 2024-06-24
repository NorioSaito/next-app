'use client';

import React from 'react';
import Image from 'next/image';
import { PopoverGroup } from '@headlessui/react';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

// 表示ページのURL取得
// const Nav = () => {
//   const router = useRouter();
// }

export default function Header() {
	// const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className="bg-white">
			<nav
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<Image src="/A-force_horizon.svg" alt="" width={200} height={970} />
					</Link>
				</div>
				{/* <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div> */}
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
								href="/contact"
								className="block px-4 py-2 text-black text-sm font-normal hover:bg-gray-100 rounded-t-lg"
							>
								SI事業
							</Link>
							<Link
								href="/"
								className="block px-4 py-2 text-black text-sm font-normal hover:bg-gray-100 rounded-b-lg"
							>
								コンサルティング事業
							</Link>
						</div>
					</div>
					<Link href="/products" className="text-sm font-semibold leading-6 text-black">
						Products
					</Link>
					<Link href="/products" className="text-sm font-semibold leading-6 text-black">
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
			{/* <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="A-force_horizon.svg"
                alt=""
                width={200}
                height={97}
              />
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
                <Link
                  href="/company"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Company
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Service
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Education
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  News
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Recruit
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog> */}
			{/*       ESlint のエラーになるためコメントアウトしています
			<link rel="stylesheet" href="recet.css"></link>
			<link rel="stylesheet" type="text/css" href="css/header.css"></link> */}
			{/* <link rel="preconnect" href="https://fonts.googleapis.com"></link> */}
			{/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link> */}
			{/* <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link> */}
		</header>
	);
}
