import React from 'react';
import Link from 'next/link';
import Hero from '../_components/Hero';

function Products() {
	return (
		<>
			<Hero title="Prodcts" text="製品紹介" />
			<Link href="/products/celf">CELF</Link>
			<Link href="/products/salesforce">Sales Force</Link>
		</>
	);
}

export default Products;
