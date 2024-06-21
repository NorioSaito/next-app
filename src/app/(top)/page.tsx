'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import PATHS from '../../constants/paths';

export default function Home() {
	// news一覧。paths.tsxにて遷移先未設定。
	const newslist = [
		{
			key: 'news1', title: '2024年の選考がスタートしました', tagtitle: '採用情報', date: '2024.04.01', path: PATHS.NEWS1,
		},
		{
			key: 'news2', title: '2番目のニュース', tagtitle: '採用情報', date: '2024.04.01', link: '/', path: PATHS.NEWS2,
		},
		{
			key: 'news3', title: '3番目のニュース', tagtitle: '採用情報', date: '2024.04.01', link: '/', path: PATHS.NEWS3,
		},
	];

	return (
		<main className="">
			{/* ヒーローイメージ */}
			<section className="flex items-start mx-20">
				<Image className="pb-24" src="top_Alogo.svg" alt="エイ・フォース株式会社" width={487} height={402}></Image>
				<Image src="top_logomark.svg" alt="エイ・フォースロゴ" width={144} height={143}></Image>
				<div className="flex-col">
					<h1>Shining</h1>
					<Image className="" src="top_ace.svg" alt="ace" width={189.21} height={80.84}></Image>
					<Image className="" src="top_criticaltimes.svg" alt="critical times" width={628} height={128}></Image>
				</div>
				<div className="absolute left-0 bottom-0 mb-10 ml-20">
					<Image src="top_catchcopy.svg" alt="ここいちばんで頼りになる、エースの集団" width={468} height={24}></Image>
				</div>
			</section>
			{/* 会社案内 */}
			<section className="flex flex-col items-center justify-center mx-20 pt-64">
				<div className="flex">
					<Image className="" src="top_orangepoint.svg" alt="" width={8} height={8}></Image>
					<h2 className="pl-2">会社案内</h2>
				</div>
				<Image className="mt-8 mb-16" src="top_ourmission.svg" alt="our mission" width={380} height={96}></Image>
				<Image src="top_ourmissiontitle.svg" alt="お客様の成功と笑顔を広げ、社会、社員を豊かに" width={703} height={317}></Image>
				<h3 className="pt-20">
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
				</h3>
				{/* 20240620時点でボタンは仮置きです。 */}
				<button onClick={() => {}}
					className="flex items-center transition-all duration-300 h-20 w-80 my-20 border border-af-black hover:bg-gradient-to-r from-white to-yellow-300 text-af-black rounded-full hover:bg-yellow-300">
					<span className="flex-grow text-left pl-6">サービスへ</span>
					<Image className="mr-2 mt-1 mb-1" src="top_orangebuttonicon.svg" alt="" width={45} height={45} ></Image>
				</button>
				<div className="flex items-center justify-center space-x-20 mx-20 mt-10 mb-40">
					<Image src="top_9circle.svg" alt="" width={240} height={240}></Image>
					<Image src="/top_lecturehand.jpg" alt="" width={240} height={240}></Image>
					<Image src="top_orangeshape.svg" alt="" width={240} height={240}></Image>
					<Image src="/top_cityview.jpg" alt="" width={240} height={240}></Image>
					<Image src="top_yellowshape.svg" alt="" width={240} height={240}></Image>
				</div>
			</section>
			{/* 事業概要（Service） */}
			<section className="bg-af-black px-20 pt-20">
				<div className="flex">
					<Image src="top_orangepoint.svg" alt="" width={8} height={8}></Image>
					<h2 className="pl-2 text-white">事業概要</h2>
				</div>
				<div className="pt-10 text-8xl text-white">
					<h1>Service</h1>
				</div>
				<h3 className="pt-10 text-white">
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/><br/>
					★ベン図の実装難しいので一旦飛ばしてます。
				</h3>
				{/* 20240620時点でボタンは仮置きです。 */}
				<div className="flex items-center justify-center">
					<button onClick={() => {}}
						className="flex items-center h-20 w-80 my-10 border bg-af-white rounded-full">
						<span className="flex-grow text-left pl-12">サービスへ</span>
						<Image className="mr-2 mt-1 mb-1" src="top_orangebuttonicon.svg" alt="" width={45} height={45} ></Image>
					</button>
				</div>
			</section>
			<section className="flex flex-col items-center justify-center mx-20 my-10 pt-40">
				<div className="flex">
					<Image src="top_orangepoint.svg" alt="" width={8} height={8}></Image>
					<h2 className="pl-2">取扱製品一覧</h2>
				</div>
				<Image className="mt-8 mb-16" src="top_products.svg" alt="products" width={380} height={96}></Image>
			</section>
			{/* CELF */}
			<section className="mb-8 px-20 pt-16">
				<div className="flex rounded-tr-lg border border-af-black">
					<div className="w-1/2 p-20">
						<h3 className="border border-af-black rounded-lg w-28 p-1">★タグ未実装</h3>
						<h2 className="my-10 text-4xl" >CELF（スプレッドシート型WEBアプリ + RPA）</h2>
						<h3>
							「CELF」は、基幹システム外において、EXCEL等で行っている属人化した業務を、エンドユーザーでもWEBアプリとして作成できるソリューションです。
						</h3>
						<div className="flex justify-end items-end pt-10">
							<Link href="/">詳しく見る</Link>
							<ChevronRightIcon className="flex justify-center w-4 h-6 text-orange-500"></ChevronRightIcon>
						</div>
					</div>
					<div className="w-1/2 flex items-center justify-end">
						<div className="flex items-center justify-center rounded-lg h-96 w-96 m-8 border border-af-black">
							<Image className="px-8" src="/top_CELF.jpg" alt="CELFロゴ" width={320} height={81}></Image>
						</div>
					</div>
				</div>
			</section>
			{/* Salesforce */}
			<section className="mb-8 px-20 pt-8">
				<div className="flex rounded-tr-lg border border-af-black">
					<div className="w-1/2 p-20">
						<h3 className="border border-af-black rounded-lg w-28 p-1">★タグ未実装</h3>
						<h2 className="my-10 text-4xl" >Salesforce</h2>
						<h3>
							コロナ禍、各企業は営業やマーケティングのあり方が、大幅に変わりつつあります。 対面営業からインサイドセールスへと、成長は止められない！<br/>
							私たちは、運用者が必要とする、トレーニングとサービスを提供をいたします。
						</h3>
						<div className="flex justify-end items-end pt-10">
							<Link href="/">詳しく見る</Link>
							<ChevronRightIcon className="flex justify-center w-4 h-6 text-orange-500"></ChevronRightIcon>
						</div>
					</div>
					<div className="w-1/2 flex items-center justify-end">
						<div className="flex items-center justify-center rounded-lg h-96 w-96 m-8 border border-af-black">
							<Image className="px-8" src="/top_Salesforce.jpg" alt="Salesforceロゴ" width={320} height={81}></Image>
						</div>
					</div>
				</div>
			</section>
			{/* InforM3 */}
			<section className="mb-24 px-20 pt-8">
				<div className="flex justify-center space-x-20">
					<div className="w-1/2 flex rounded-tr-lg  border border-af-black">
						<div className="w-1/2 p-10">
							<h3 className="border border-af-black rounded-lg w-28 p-1">★タグ未実装</h3>
							<h2 className="my-10 text-4xl">InforM3</h2>
							<h3>
								テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
							</h3>
							<div className="flex justify-end items-end pt-10">
								<Link href="/">詳しく見る</Link>
								<ChevronRightIcon className="flex justify-center w-4 h-6 text-orange-500"></ChevronRightIcon>
							</div>
						</div>
						<div className="w-1/2 p-10">
							<div className="rounded-lg h-72 w-72 ml-auto border border-af-black">
							</div>
						</div>
					</div>
					<div className="w-1/2 flex rounded-tr-lg border border-af-black">
						<div className="w-1/2 p-10">
							<h3 className="border border-af-black rounded-lg w-28 p-1">★タグ未実装</h3>
							<h2 className="my-10 text-4xl">InforM3</h2>
							<h3>
								テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
							</h3>
							<div className="flex justify-end items-end pt-10">
								<Link href="/">詳しく見る</Link>
								<ChevronRightIcon className="flex justify-center w-4 h-6 text-orange-500"></ChevronRightIcon>
							</div>
						</div>
						<div className="w-1/2 p-10">
							<div className="rounded-lg h-72 w-72 ml-auto border border-af-black">
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* 20240620時点でボタンは仮置きです。 */}
			<div className="flex items-center justify-center mb-40">
				<button onClick={() => {}}
					className="flex items-center transition-all duration-300 h-20 w-80 border border-af-black hover:bg-gradient-to-r from-white to-yellow-300 text-af-black rounded-full hover:bg-yellow-300">
					<span className="flex-grow text-left pl-6">製品一覧へ</span>
					<Image className="mr-2 mt-1 mb-1" src="top_orangebuttonicon.svg" alt="" width={45} height={45} ></Image>
				</button>
			</div>
			{/* AFORCEAFORCEAFORCEAFORCE */}
			<section className="bg-af-yellow px-20">
				<div className="flex justify-center items-center z-10">
					<Image src="top_orangeAforce.svg" alt="" width={1440} height={64}></Image>
				</div>
			</section>
			{/* 採用情報 */}
			<section className="bg-af-black px-20 pt-20 pb-12">
				<div className="flex">
					<Image src="top_orangepoint.svg" alt="" width={8} height={8}></Image>
					<h3 className="pl-4 text-white">採用情報</h3>
				</div>
				<div className="pt-10 text-8xl text-white">
					<h1>Recruit</h1>
				</div>
				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: '100%' }}
					transition={{
						duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop',
					}} >
					<Image src="top_recruit5shapes.svg" alt="" width={1443} height={312}></Image>
				</motion.div>
				<div className='flex justify-end pr-64'>
					<Image src="top_workwithus.svg" alt="" width={428.53} height={138.77}></Image>
				</div>
				<div>
					<h4 className="leading-loose text-white">
						未知の領域に挑戦し、自己成長したい方。<br/>
						ITを活用して社会に貢献し、社会を豊かにしたい方。<br/>
						エイ・フォースは、そんなビジョンを共有できる仲間をもとめています。
					</h4>
					{/* ボタンは仮置きです。 */}
					<button onClick={() => {}}
						className="flex items-center h-20 w-80 mt-8 border bg-af-white rounded-full text-af-black">
						<span className="flex-grow text-left pl-12">採用情報へ</span>
						<Image className="mr-2 mt-1 mb-1" src="top_orangebuttonicon.svg" alt="" width={45} height={45} ></Image>
					</button>
				</div>
			</section>
			{/* お知らせ */}
			<section className="flex px-20 pt-20">
				<div className="w-1/2">
					<div className="flex mb-8">
						<Image src="top_orangepoint.svg" alt="" width={8} height={8}></Image>
						<h3 className="pl-4">お知らせ</h3>
					</div>
					<Image src="top_news.svg" alt='news' width={180} height={64}></Image>
				</div>
				{/* ニュースリスト */}
				<div className="grid w-1/2 ">
					{newslist.map((item) => (
						<div key={item.key} className="grid grid-cols-4 gap-3">
							<div className='col-span-3 my-8'>
								<Link href={item.path} >{item.title}</Link>
								<h3 className="border border-black rounded-lg w-20 h-6 my-2">{item.tagtitle}</h3>
							</div>
							<div className="col-span-1 flex items-center justify-center">
								<h3 className="font-bold">{item.date}</h3>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="flex justify-end items-end px-20 py-20">
				<button onClick={() => {}}
					className="flex items-center h-20 w-80 border border-black bg-af-white rounded-full text-black">
					<span className="flex-grow text-left pl-12">ニュース一覧へ</span>
					<Image className="mr-2 mt-1 mb-1" src="top_orangebuttonicon.svg" alt="" width={45} height={45} ></Image>
				</button>
			</section>
			{/* セミナー情報 */}
			<section className="px-20 pt-20">
				<div className="flex mb-8">
					<Image src="top_orangepoint.svg" alt="" width={8} height={8}></Image>
					<h3 className="pl-4">セミナー情報</h3>
				</div>
				<Image className="mb-8" src="top_seminar.svg" alt='news' width={280} height={64}></Image>
				<div className="flex space-x-10 mb-48">
					<div className="w-1/2">
						{/* リンク先未設定 */}
						<Link href="/">
							<div className="bg-af-gray border rounded-lg h-64">
								CELF
							</div>
						</Link>
					</div>
					<div className="w-1/2">
						<Link href="/">
							<div className="bg-af-gray border rounded-lg h-64">
								ITエース
							</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
