'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Square2StackIcon } from '@heroicons/react/24/outline';

export default function RecruitFooter() {
	return (
		<footer className="text-center pt-[9.6rem] pb-[9rem]">
			<div className="flex justify-center">
				<Image
					className=""
					src="logo_aforce_vertical 3.svg"
					alt="エイ・フォース株式会社"
					width={120}
					height={138}
				></Image>
			</div>
			<p className="pb-[2.4rem] text-af-xs">エイ・フォース株式会社採用サイト</p>
			<div className="flex justify-center gap-[1.6rem] text-af-xs mb-[2.4rem]">
				<Link href="/recruit" className="flex items-center">
					<p className="">TOP</p>
				</Link>
				<Link href="/recruit" className="flex items-center">
					<p className="">はたらく環境・文化を知る</p>
				</Link>
				<Link href="/recruit" className="flex items-center">
					<p className="">社員紹介</p>
				</Link>
				<Link href="/recruit" className="flex items-center">
					<p className="">新卒採用募集要項</p>
				</Link>
				<Link href="/recruit" className="flex items-center">
					<p className="mr-[0.8rem]">コーポレートサイト</p>
					<Square2StackIcon className="h-5"></Square2StackIcon>
				</Link>
				<Link href="/recruit" className="flex items-center">
					<p className="mr-[0.8rem]">お問い合わせ</p>
					<Square2StackIcon className="h-5"></Square2StackIcon>
				</Link>
			</div>
			<div className="flex justify-center mb-[2.4rem]">
				<Link href="/recruit" className="flex items-center">
					<Image
						className=""
						src="wantedlyLogoLightBG 1.svg"
						alt="Wantedly"
						width={160}
						height={40}
					></Image>
				</Link>
			</div>
			<p className="text-af-xs">Copyright© 2024 A-force All Rights Reserved.</p>
		</footer>
	);
}
