'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

// Breadcrumb コンポーネントの定義
const Breadcrumb = () => {
	const path = usePathname();
	let joinedPath = '';

	return (
		<div className="flex items-center text-sm px-4 w-full">
			<Link href="/">
				<p className="text-gray-500 hover:text-gray-600" />
				Home
				<p />
			</Link>
			{path.split('/').map((element, index) => {
				if (element) {
					joinedPath += `${element}/`;
					return (
						<Link key={index} href={`/${joinedPath}`}>
							<span className="text-gray-500 mx-2">/</span> {element}
						</Link>
					);
				}
				return <></>;
			})}
		</div>
	);
};

export default Breadcrumb;
