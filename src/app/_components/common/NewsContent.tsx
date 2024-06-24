'use client';

import React from 'react';

function Card(props: { title: string; subTitle: string; date: Date }) {
	const formattedDate = props.date
		.toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
		.replace(/\//g, '/');
	return (
		<div className="grid pt-[2%] pb-[2%] md:grid-cols-3">
			<div className="order-2 md:order-1 col-span-2">
				<div className="text-sm font-bold md:text-xl">{props.title}</div>
				<button className="rounded-full px-1 py-0.3 border text-xs text-slate-500 md:text-base">
					<span className="text-lime-400 font-bold text-sm">●</span>
					{props.subTitle}
				</button>
			</div>
			<div className="grid text-sm  order-1 md:order-2 md:items-center">
				<div className="text-sm text-start md:text-lg md:text-end">{formattedDate}</div>
			</div>
		</div>
	);
}

export default Card;
