import PATHS from '@/constants/paths';
import Link from 'next/link';
import React from 'react';

function Breadcrumb() {
	return (
		<div className="mt-5">
			<Link href={PATHS.INDEX}>Top</Link>
			&gt;
			<Link href={PATHS.PRODUCTS}>Products</Link>
			&gt;
			<Link href={PATHS.PRODUCTS}>CELF</Link>
		</div>
	);
}

export default Breadcrumb;
