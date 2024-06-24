'use client';

import React from 'react';
import style from '../../assets/css/common.module.css';

function Button(props: { title: string; link: string }) {
	return (
		<a
			href={props.link}
			className={`${style.btn} ${style.bgleft} grid grid-cols-3 w-15 border text-black rounded-full pl-4 pr-2 py-2`}
		>
			<div className="col-span-2">{props.title}</div>
			<div className="grid items-center contents-cente justify-end">
				<div className="font-bold text-center align-middle w-7 h-7 rounded-full bg-orange-600">
					＞
				</div>
			</div>
		</a>
	);
}

export default Button;
