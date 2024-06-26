// products/data_filter.ts
export const mainFilters = [
	{ label: 'Category 1', color: 'text-green-500', subFilters: ['Type A', 'Type B'] },
	{ label: 'Category 2', color: 'text-orange-500', subFilters: ['Java', 'Next.js'] },
	// 他のメインフィルター
];

export const subFilters = [
	'Type A',
	'Type B',
	'Java',
	'Next.js',
	// 他のサブフィルター
];

// ジャンルと色のマッピング
export const genreColors = {
	'Category 1': 'text-green-500',
	'Category 2': 'text-orange-500',
	'Type A': 'text-blue-500',
	'Type B': 'text-gray-500',
	Java: 'text-yellow-500',
	'Next.js': 'text-purple-500',
};
