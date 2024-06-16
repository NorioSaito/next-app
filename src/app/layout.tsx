import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import Header from './header';

export const metadata: Metadata = {
	title: 'エイ・フォース株式会社',
	description: '会社 HP の説明です。',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
