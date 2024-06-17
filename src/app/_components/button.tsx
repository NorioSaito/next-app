import React from 'react'


interface ButtonProps {
  text: string;
  onClick: () => void;
}

const button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="navButton">
      {text}
    </button>
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