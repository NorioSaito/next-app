import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

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
			fontSize: {
				'af-xs': '1.6rem', // 16px
				'af-sm': '2.4rem', // 24px
				'af-md': '3.2rem', // 32px
				'af-lg': '6.4rem', // 64px
			},
			colors: {
				'af-orange': '#FF5C00', // オレンジ
				'af-black': '#2B2C32', // 黒
				'af-white': '#ffffff', // 白
				'af-gray': '#F9F9F9', // グレー
				'af-blue': '#0057FF', // ブルー
				'af-yellow': '#FFD400', // 黄色
				'af-green': '#58D073', // 緑
			},
		},
	},
	plugins: [
		({ addUtilities }: PluginAPI) => {
			const newUtilities = {
				'.text-outline-black': {
					color: 'white',
					textShadow: `
					-1px -1px 0 #000,
					1px -1px 0 #000,
					-1px 1px 0 #000,
					1px 1px 0 #000`,
				},
			};
			addUtilities(newUtilities);
		},
	],
};

export default config;
