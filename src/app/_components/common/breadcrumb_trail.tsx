'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

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
					<Link href="/" className="text-orange-500 hover:underline">
						HOME
					</Link>
					<span className="mx-2 text-orange-500">{'>'}</span>
				</li>
				{pathArray.map((path, index) => {
					const href = `/${pathArray.slice(0, index + 1).join('/')}`;
					const isLastItem = index === pathArray.length - 1;
					return (
						<li key={href} className="flex items-center">
							{!isLastItem ? (
								<>
									<Link href={href} className="text-blue-600 hover:underline">
										{decodeURIComponent(path)}
									</Link>
									<span className="mx-2 text-gray-500">{'>'}</span>
								</>
							) : (
								<span className="text-gray-700">{decodeURIComponent(path)}</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
