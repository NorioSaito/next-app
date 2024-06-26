'use client';

import React from 'react';
import Image from 'next/image';
import style from '../../assets/css/common.module.css';

function Button(props: { title: string; link: string }) {
	return (
		<a
			href={props.link}
			className={`${style.btn} ${style.bgleft} grid grid-cols-3 w-[320px] h-[63px] border text-black rounded-full bg-af-white pl-[48px] pr-[10px]`}
		>
			<div className="flex col-span-2 text-start items-center text-af-xs">{props.title}</div>
			<div className="grid items-center contents-cente justify-end">
				<div className="flex items-center justify-center font-bold text-center align-middle w-[45px] h-[45px] rounded-full bg-af-orange">
					<Image
						className="flex items-center justify-start"
						alt=""
						width={4}
						height={10}
						src="v.svg"
					/>
				</div>
			</div>
		</a>
	);
}

export default Button;
