'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/16/solid';

export default function Home() {
	return (
		<main className="">
			<section className="flex items-start mx-20">
				<Image
					className="pb-24"
					src="top_Alogo.svg"
					alt="エイ・フォース株式会社"
					width={487}
					height={402}
				></Image>
				<Image
					src="top_logomark.svg"
					alt="エイ・フォースロゴ"
					width={144}
					height={143}
				></Image>
				<div className="flex-col">
					<h1>Shining</h1>
					<Image
						className=""
						src="top_ace.svg"
						alt="ace"
						width={189.21}
						height={80.84}
					></Image>
					<Image
						className=""
						src="top_criticaltimes.svg"
						alt="critical times"
						width={628}
						height={128}
					></Image>
				</div>
				<div className="absolute left-0 bottom-0 mb-10 ml-20">
					<Image
						src="top_catchcopy.svg"
						alt="ここいちばんで頼りになる、エースの集団"
						width={468}
						height={24}
					></Image>
				</div>
			</section>

			<section className="flex flex-col items-center justify-center mx-20 pt-64">
				<div className="flex">
					<Image
						className="pb-20"
						src="top_orangepoint.svg"
						alt=""
						width={16}
						height={16}
					></Image>
					<h3 className="pl-4">会社案内</h3>
				</div>
				<Image
					className="pb-16"
					src="top_ourmission.svg"
					alt="our mission"
					width={380}
					height={96}
				></Image>
				<Image
					src="top_ourmissiontitle.svg"
					alt="お客様の成功と笑顔を広げ、社会、社員を豊かに"
					width={703}
					height={317}
				></Image>
				<h3 className="pt-20">
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
					<br />
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
					<br />
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
					<br />
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
				</h3>
				{/* 20240620時点でボタンは仮置きです。 */}
				<button
					onClick={() => {}}
					className="flex items-center transition-all duration-300 h-20 w-80 my-20 border border-black hover:bg-gradient-to-r from-white to-yellow-300 text-black rounded-full hover:bg-yellow-300"
				>
					<span className="flex-grow text-left pl-6">サービスへ</span>
					<Image
						className="mr-2 mt-1 mb-1"
						src="top_orangebuttonicon.svg"
						alt=""
						width={45}
						height={45}
					></Image>
				</button>
				<div className="flex items-center justify-center space-x-20 mx-20 mt-10 mb-40">
					<Image src="top_9circle.svg" alt="" width={240} height={240}></Image>
					<Image src="/top_lecturehand.jpg" alt="" width={240} height={240}></Image>
					<Image src="top_orangeshape.svg" alt="" width={240} height={240}></Image>
					<Image src="/top_cityview.jpg" alt="" width={240} height={240}></Image>
					<Image src="top_yellowshape.svg" alt="" width={240} height={240}></Image>
				</div>
			</section>
			<section className="bg-gray-950 px-20 pt-20">
				<div className="flex">
					<Image src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
					<h3 className="pl-4 text-white">事業概要</h3>
				</div>
				<div className="pt-10 text-8xl text-white">
					<h1>Service</h1>
				</div>
				<h3 className="pt-10 text-white">
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
					<br />
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
					<br />
					<br />
					★ベン図の実装難しいので一旦飛ばしてます。
				</h3>
				{/* 20240620時点でボタンは仮置きです。 */}
				<div className="flex items-center justify-center">
					<button
						onClick={() => {}}
						className="flex items-center transition-all duration-300 h-20 w-80 my-20 border border-white hover:bg-gradient-to-r from-black to-yellow-300  rounded-full hover:bg-yellow-300"
					>
						<span className="flex-grow text-left text-white pl-6">サービスへ</span>
						<Image
							className="mr-2 mt-1 mb-1"
							src="top_orangebuttonicon.svg"
							alt=""
							width={45}
							height={45}
						></Image>
					</button>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center mx-20 my-10 pt-48">
				<div className="flex">
					<Image
						className="pb-20"
						src="top_orangepoint.svg"
						alt=""
						width={16}
						height={16}
					></Image>
					<h3 className="pl-4">取扱製品一覧</h3>
				</div>
				<Image src="top_products.svg" alt="products" width={380} height={96}></Image>
			</section>
			<section className="px-20 pt-20">
				<div className="flex rounded-tr-lg border border-black">
					<div className="w-1/2 p-20">
						<h3 className="border border-black rounded-lg w-28 p-1">★タグ未実装</h3>
						<h2 className="my-10 text-4xl">
							CELF（スプレッドシート型WEBアプリ + RPA）
						</h2>
						<h3>
							「CELF」は、基幹システム外において、EXCEL等で行っている属人化した業務を、エンドユーザーでもWEBアプリとして作成できるソリューションです。
						</h3>
						<div className="flex justify-end items-end pt-10">
							<Link href="/">詳しく見る</Link>
							<ChevronRightIcon className="flex justify-center w-4 h-6 text-orange-500"></ChevronRightIcon>
						</div>
					</div>
					<div className="w-1/2 flex items-center justify-end">
						<div className="flex items-center justify-center rounded-lg h-96 w-96 m-8 border border-black">
							<Image
								className="px-8"
								src="/top_CELF.jpg"
								alt="CELFロゴ"
								width={320}
								height={81}
							></Image>
						</div>
					</div>
				</div>
			</section>
			<section className="mb-20 px-20 pt-20">
				<div className="flex rounded-tr-lg border border-black">
					<div className="w-1/2 p-20">
						<h3 className="border border-black rounded-lg w-28 p-1">★タグ未実装</h3>
						<h2 className="my-10 text-4xl">Salesforce</h2>
						<h3>
							テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
						</h3>
						<div className="flex justify-end items-end pt-10">
							<Link href="/">詳しく見る</Link>
							<ChevronRightIcon className="flex justify-center w-4 h-6 text-orange-500"></ChevronRightIcon>
						</div>
					</div>
					<div className="w-1/2 flex items-center justify-end">
						<div className="flex items-center justify-center rounded-lg h-96 w-96 m-8 border border-black">
							<Image
								className="px-8"
								src="/top_Salesforce.jpg"
								alt="Salesforceロゴ"
								width={320}
								height={81}
							></Image>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
