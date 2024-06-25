'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';


const Breadcrumb = () => {
	const pathname = usePathname();

	if (!pathname) {
		return null; // パスが取得できない場合は何も表示しない
	}

	const pathArray = pathname.split('/').filter((path) => path);

	return (
		<nav aria-label="breadcrumb">
			<ol className="flex items-center space-x-2">
				<li className="flex items-center">
					<Link href="/" className="text-af-orange text-[16px] hover:underline">
						HOME
					</Link>
					<ChevronRightIcon className="mx-2 w-[16px] h-[16px] text-af-orange" />
				</li>
				{pathArray.map((path, index) => {
					const href = `/${pathArray.slice(0, index + 1).join('/')}`;
					const isLastItem = index === pathArray.length - 1;
					return (
						<li key={href} className="flex items-center">
							{!isLastItem ? (
								<>
									<Link href={href} className="text-af-black text-[16px] hover:underline">
										{decodeURIComponent(path)}
									</Link>
									<ChevronRightIcon className="mx-2 w-[16px] h-[16px] text-af-black" />
								</>
							) : (
								<span className="text-af-black text-[16px]">{decodeURIComponent(path)}</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
