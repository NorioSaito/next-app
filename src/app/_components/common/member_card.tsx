import React from 'react';
import Image from 'next/image';

function MemberCard(props: {
	position: string;
	title: string;
	sub: string;
	img: string;
	link: string;
}) {
	return (
		<div className="">
			<a href={props.link} className="">
				<Image
					className="border border-black rounded-[1.6rem] mb-[1.6rem]"
					src={props.img}
					alt="エイ・フォース株式会社"
					width={400}
					height={272}
				></Image>
			</a>
			<button className="px-3 py-1 mb-[1.6rem] border border-black rounded-full text-[1.2rem]">
				<span className="">●</span>
				{props.position}
			</button>
			<h3 className="mb-[1.6rem] text-af-sm">{props.title}</h3>
			<p className="text-af-xs">{props.sub}</p>
		</div>
	);
}

export default MemberCard;
