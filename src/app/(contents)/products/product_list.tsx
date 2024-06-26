/* eslint-disable @next/next/no-img-element */

'use client';

import { useState, useMemo } from 'react';
import { products } from './data_product';
import { mainFilters, subFilters, genreColors } from './data_filter';

export default function ProductList() {
	const [selectedMainFilter, setSelectedMainFilter] = useState<string | null>(null);
	const [selectedSubFilter, setSelectedSubFilter] = useState<string | null>(null);

	const handleMainFilterClick = (filter: string | null) => {
		setSelectedMainFilter(filter);
		setSelectedSubFilter(null); // メインフィルターが変更された際にサブフィルターをリセット
	};

	const handleSubFilterClick = (filter: string | null) => {
		setSelectedSubFilter(filter);
	};

	const filteredProducts = useMemo(
		() =>
			products.filter((product) => {
				if (selectedMainFilter === null && selectedSubFilter === null) {
					return true; // "すべて"が選択されている場合は、すべての製品を表示
				}
				if (selectedMainFilter !== null && selectedSubFilter !== null) {
					return (
						product.attributes.includes(selectedMainFilter) &&
						product.attributes.includes(selectedSubFilter)
					);
				}
				if (selectedMainFilter !== null) {
					return product.attributes.includes(selectedMainFilter);
				}
				if (selectedSubFilter !== null) {
					return product.attributes.includes(selectedSubFilter);
				}
				return false;
			}),
		[selectedMainFilter, selectedSubFilter],
	);

	const filteredSubFilters = useMemo(() => {
		if (selectedMainFilter === null) {
			return subFilters;
		}
		// 選択されたメインフィルターに関連するサブフィルターを取得
		const mainFilter = mainFilters.find((filter) => filter.label === selectedMainFilter);
		return mainFilter ? mainFilter.subFilters : [];
	}, [selectedMainFilter]);

	const getColorClass = (attribute: string) => {
		return genreColors[attribute] || 'text-gray-500'; // デフォルトでグレー
	};

	return (
		<div className="mx-auto p-4">
			<div className="mb-4">
				<div className="flex space-x-4 mb-4">
					<button
						className={`px-4 py-2 border border-black rounded-full ${selectedMainFilter === null ? 'bg-black text-white' : 'bg-white text-black'}`}
						onClick={() => handleMainFilterClick(null)}
					>
						すべて
					</button>
					{mainFilters.map((filter) => (
						<button
							key={filter.label}
							className={`px-4 py-2 border border-black rounded-full ${
								selectedMainFilter === filter.label
									? 'bg-black text-white'
									: 'bg-white text-black'
							}`}
							onClick={() => handleMainFilterClick(filter.label)}
						>
							<span className={`mr-2 ${filter.color}`}>●</span>
							{filter.label}
						</button>
					))}
				</div>
			</div>

			{selectedMainFilter && (
				<div className="mb-4">
					<div className="flex space-x-4 mb-4">
						{filteredSubFilters.map((filter) => (
							<button
								key={filter}
								className={`px-4 py-2 border border-black rounded-full ${
									selectedSubFilter === filter
										? 'bg-black text-white'
										: 'bg-white text-black'
								}`}
								onClick={() => handleSubFilterClick(filter)}
							>
								<span className={`text-gray-500 mr-2 ${getColorClass(filter)}`}>
									●
								</span>
								{filter}
							</button>
						))}
					</div>
				</div>
			)}

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{filteredProducts.map((product) => (
					<a
						key={product.id}
						href={`/products/${product.id}`} // 製品詳細ページのリンク先
						className="bg-white rounded-lg p-8 block no-underline hover:shadow-lg transition-shadow duration-200"
					>
						<img
							src={product.image}
							alt={product.title}
							className="w-full h-60 object-cover mb-4 rounded-2xl shadow"
						/>
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
