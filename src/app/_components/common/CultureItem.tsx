'use client';

import Image from 'next/image';
import React from 'react';

function StyledComponent(props: {
	number: string;
	text: string;
	imageUrl: string;
	imageWidth: number;
	imageHight: number;
}) {
	return (
		<div className="relative w-[373px] h-[450px] flex items-center justify-center">
			<div className="relative w-[373px] h-[400px] bg-white rounded-t-[186.5px] rounded-b-[16px] border border-af-black shadow-[16px_16px_0px_0px_#508cfe] flex flex-col items-center justify-center">
				<h1 className="text-[48px] font-bold">{props.number}</h1>
				<p className="mt-[14px] text-af-sm font-bold">{props.text}</p>
				<div className="mt-[16px]">
					<Image
						src={props.imageUrl}
						alt=""
						width={props.imageWidth}
						height={props.imageHight}
					/>
				</div>
			</div>
			<div className="absolute bottom-[-6px] w-[64px] h-[64px] bg-af-black rounded-full flex items-center justify-center">
				<p className="mb-[12px] text-[50px] text-white">+</p>
			</div>
		</div>
	);
}

export default StyledComponent;
