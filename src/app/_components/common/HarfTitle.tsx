'use client';

import React from 'react';

// テキストの配置に関するpropsのパラメータ
// start:左寄せ
// end:右寄せ
// center:真ん中
function HerfTittle(props: { title: string; subTitle: string; text_position: string }) {
	return (
		<div className="items-center">
			<div className="gap-[32px]">
				<div className={`text-${props.text_position} md:text-af-sm`}>
					<span className="pr-[8px] text-orange-500">●</span>
					{props.subTitle}
				</div>
				<h2
					className={`text-${props.text_position} text-outline-black font-bold md:text-af-lg`}
				>
					{props.title}
				</h2>
			</div>
		</div>
	);
}

export default HerfTittle;
