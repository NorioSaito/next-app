'use client';

import React from 'react';

// テキストの配置に関するpropsのパラメータ(text_posision)
// start:左寄せ
// end:右寄せ
// center:真ん中

// サブタイトルのフォントカラー(sub_color)
// black:af-black
// white:af-white
function HerfTittle(props: {
	title: string;
	subTitle: string;
	text_position: string;
	sub_color?: string;
}) {
	return (
		<div className="items-center">
			<div className="gap-[32px]">
				<div
					className={`text-${props.text_position} text-af-${props.sub_color} md:text-af-sm`}
				>
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
