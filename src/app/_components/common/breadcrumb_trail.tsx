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

	const pathMapping: { [key: string]: string } = {
		company: 'Company',
		service: 'Service',
		si: 'SI事業',
		consulting: 'コンサルティング事業',
		education: '教育事業',
		contact: 'Contact',
        recruit: 'Recruit',
        employee_introductions: '社員紹介TOP',
        employee_details: '社員紹介詳細',
		new_graduate_recruitment: '新卒採用募集要項',
		culture: 'はたらく環境・文化を知る'
    };

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
					const displayName = pathMapping[path] || decodeURIComponent(path);
					return (
						<li key={href} className="flex items-center">
							{!isLastItem ? (
								<>
									<Link href={href} className="text-af-black text-[16px] hover:underline">
										{displayName}
									</Link>
									<ChevronRightIcon className="mx-2 w-[16px] h-[16px] text-af-black" />
								</>
							) : (
								<span className="text-af-black text-[16px]">{displayName}</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
