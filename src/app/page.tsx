'use client';

import React from 'react';
import Button from './_components/button'; // ボタンコンポーネントをインポート

// import { useRouter } from 'next/router';

// ボタン押下時処理
// const Nav = () => {
// 	const router = useRouter();

// const handleClick = (path: string) =>{
// 	const handleNavigation = (path: string) => {
// 		router.push(path);
// 	};
// }
// }
const handleClick = () => {
	// ESlint のエラーになるためコメントアウトしています
	// console.log('Button clicked!');
};

export default function Home() {
	return (
		<main>
			<div className="ssamplebutton">
				<Button text="トップページボタン" onClick={handleClick} />
			</div>
		</main>
	);
}
