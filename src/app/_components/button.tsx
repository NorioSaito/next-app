import React from 'react';
import './button.css';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

interface ButtonProps {
	text: string;
	onClick: () => void;
}

const button: React.FC<ButtonProps> = ({ text, onClick }) => {
	return (
		<div>
			<button
				onClick={onClick}
				className="border border-black hover:bg-gradient-to-r from-white to-yellow-300 text-black text-xs m-2 py-2 px-4  rounded-full hover:bg-yellow-300 transition-all duration-300 flex items-center"
			>
				<span>{text}</span>
				<ArrowRightCircleIcon className="h-5 w-5 ml-3 p-1 text-white bg-orange-500 rounded-full" />
			</button>
		</div>
	);
};
export default button;

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
// import Link from 'next/link';
// // import PATHS from '../constants/paths';

// // ボタンが押されたときに実行する処理を関数として定義する
// const handleClick = () => {
//   console.log('クリックされました。');
// };
// function OnclickSample() {
//   return (
//     <div>
//       {/* button タグの onClick 属性に宣言した関数を設定する */}
//         <button onClick={handleClick}>クリック</button>
//     </div>
//   );
// }

//   // const animatedutton = ({ text, onclick }: {text:string, onclick:() => void}) => {
//   //   return (
//   //     <button className={styles.button} onClick={onclick}>
//   //       {text}
//   //     </button>
//   //   );
//   // };

//   export default button;
