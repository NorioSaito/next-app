/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useMemo } from 'react';
import { products } from './data_product';
import { mainFilters, subFilters } from './data_filter';

export default function ProductList() {
	const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

	const handleFilterClick = (filter: string | null) => {
		setSelectedFilter(filter);
	};

	const filteredProducts = useMemo(() => products.filter((product) => {
		if (selectedFilter === null) {
			return true; // "すべて"が選択されている場合は、すべての製品を表示
		}
		// 特定のフィルターが選択されている場合
		return product.attributes.length > 0 && product.attributes.includes(selectedFilter);
	}), [selectedFilter]);

	// メインフィルターの属性ごとに色をマップする関数を作成
	const getColorClass = (attribute: string) => {
		switch (attribute) {
		case 'Category 1':
			return 'text-red-500';
		case 'Category 2':
			return 'text-blue-500';
		case 'Type A':
		case 'Type B':
			return 'text-gray-500'; // サブフィルターの属性は無条件にグレー
		default:
			return 'text-gray-500'; // デフォルトでグレー
		}
	};

	return (
		<div className="mx-auto p-4">
			<div className="mb-4">
				<div className="flex space-x-4 mb-4">
					<button
						className={`px-4 py-2 border border-black rounded-full ${selectedFilter === null ? 'bg-black text-white' : 'bg-white text-black'}`}
						onClick={() => handleFilterClick(null)}
					>
            すべて
					</button>
					{mainFilters.map((filter) => (
						<button
							key={filter.label}
							className={`px-4 py-2 border border-black rounded-full ${
								selectedFilter === filter.label ? 'bg-black text-white' : 'bg-white text-black'
							}`}
							onClick={() => handleFilterClick(filter.label)}
						>
							<span
								// eslint-disable-next-line no-nested-ternary
								className={`mr-2 ${filter.color === 'red-500' ? 'text-red-500' : filter.color === 'blue-500' ? 'text-blue-500' : ''}`}
							>
                ●
							</span>
							{filter.label}
						</button>
					))}
				</div>
			</div>

			<div className="mb-4">
				<div className="flex space-x-4 mb-4">
					{subFilters.map((filter) => (
						<button
							key={filter}
							className={`px-4 py-2 border border-black rounded-full ${
								selectedFilter === filter ? 'bg-black text-white' : 'bg-white text-black'
							}`}
							onClick={() => handleFilterClick(filter)}
						>
							<span className="text-gray-500 mr-2">●</span>
							{filter}
						</button>
					))}
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{filteredProducts.map((product) => (
					<a
						key={product.id}
						href={`/products/${product.id}`} // 製品詳細ページのリンク先
						className="bg-white rounded-lg p-8 block no-underline hover:shadow-lg transition-shadow duration-200"
					>
						<img src={product.image} alt={product.title} className="w-full h-60 object-cover mb-4 rounded-2xl shadow" />
						<h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
						<div className="flex space-x-2">
							{product.attributes.map((attribute, index) => (
								<span
									key={`${product.id}-${attribute}-${index}`}
									className="bg-white text-black border border-black px-2 py-1 rounded-full flex items-center"
								>
									<span className={`mr-2 ${getColorClass(attribute)}`}>●</span>
									{attribute}
								</span>
							))}
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
