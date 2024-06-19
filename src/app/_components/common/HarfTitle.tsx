'use client';

import React from 'react';

// テキストの配置に関するpropsのパラメータ
// start:左寄せ
// end:右寄せ
// center:真ん中
function HerfTittle(props: { title: string; subTitle: string; text_position: string }) {
	return (
		<div className="items-center">
			<div className="grid grid-rows-2">
				<div className={`text-${props.text_position} text-lg md:text-base`}>
					<span className="pr-[1%] text-orange-500">●</span>
					{props.subTitle}
				</div>
				<h2
					className={`text-${props.text_position} text-outline-black text-2xl font-bold md:text-6xl`}
				>
					{props.title}
				</h2>
			</div>
		</div>
	);
}

export default HerfTittle;
