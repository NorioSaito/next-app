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
				<div className={`text-${props.text_position} text-lg md:text-af-sm`}>
					<span className="pr-[8px] text-af-orange">●</span>
					{props.subTitle}
				</div>
				<h2
					className={`text-${props.text_position} text-outline-black text-2xl font-bold md:pt-[32px] text-[6.4rem]`}
				>
					{props.title}
				</h2>
			</div>
		</div>
	);
}

export default HerfTittle;
