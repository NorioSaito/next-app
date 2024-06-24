import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

// Breadcrumb コンポーネントの定義
const Breadcrumb = () => {
	const router = useRouter();
	let joinedPath = '';

	return (
		<div className="flex items-center text-sm px-4 w-full">
			<Link href="/">
				<p className="text-gray-500 hover:text-gray-600" />
				Home
				<p />
			</Link>
			{router.asPath.split('/').map((path, index) => {
				if (path) {
					joinedPath += `${path}/`;
					return (
						<Link key={index} href={`/${joinedPath}`}>
							<span className="text-gray-500 mx-2">/</span> {path}
						</Link>
					);
				}
				return <></>;
			})}
		</div>
	);
};

export default Breadcrumb;
