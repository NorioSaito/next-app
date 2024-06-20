import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'af-orange': '#FF5C00', // オレンジ
				'af-black': '#2B2C32', // 黒
				'af-white': '#ffffff', // 白
				'af-gray': '#F9F9F9', // グレー
				'af-blue': '#0057FF', // ブルー
				'af-yellow': '#FFD400', // 黄色
				'af-green': '#EBFF00', // 緑（色が黄色と同じ）
			},
			fontSize: {
				base: '1.6rem',
			},
		},
	},
};

export default config;
