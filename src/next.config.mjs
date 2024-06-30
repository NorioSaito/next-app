/** @type {import('next').NextConfig} */
const nextConfig = {
	eslint: {
		ignoreDuringBuilds: true,
	},
	trailingSlash: true,
	output: 'export',
	images: {
		loader: 'custom',
		loaderFile: './app/utils/customLoader.ts',
	},
};

export default nextConfig;
