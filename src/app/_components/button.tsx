'use client';

import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import style from '@/app/assets/css/common.module.css';

function Button(props: { title: string; link: string }) {
	return (
		<a
			href={props.link}
			className={`${style.btn} ${style.bgleft} grid grid-cols-3 w-15 border text-black rounded-full pl-4 pr-2 py-2`}
		>
			<div className="col-span-2 text-af-xs flex items-center justify-center">
				{props.title}
			</div>
			<div className="grid items-center contents-cente justify-end">
				<div className="font-bold w-[45px] h-[45px] rounded-full bg-af-orange flex items-center justify-center">
					<ChevronRightIcon className="text-white w-[12px] h-[12px] " /> :
				</div>
			</div>
		</a>
	);
}

export default Button;
