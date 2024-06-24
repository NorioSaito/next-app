'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { motion } from 'framer-motion';
import PATHS from '../../constants/paths';
import Button from '../_components/common/Button';
import AnimatedText from './AnimatedText';
import AnimatedSectionTitle from './AnimatedSectionTitle';

<motion.svg>
	<motion.path />
</motion.svg>;

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
			<section className="mx-32">
				<div className="flex items-start">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 5 }}>
						<Image className="pb-24" src="top_Alogo.svg" alt="エイ・フォース株式会社" width={487} height={402}></Image>
					</motion.div>
					<div className="flex-col">
						<motion.div
							animate={{ rotate: 360 }}
							transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}>
							<Image className="pb" src="top_logomark.svg" alt="エイ・フォースロゴ" width={144} height={143}></Image>
						</motion.div>
					</div>
					<div className="flex-col">
						<div className="flex">
							<AnimatedText text="Shining" className="text-af-xl font-bold text-af-black"/>
							<Image className="" src="top_ace.svg" alt="ace" width={189.21} height={80.84}></Image>
						</div>
						<AnimatedText text="Critical&nbsp;Times." className="text-af-xl font-bold text-af-black"/>
					</div>

				</div>
				<div className="">
					<Image src="top_catchcopy.svg" alt="ここいちばんで頼りになる、エースの集団" width={468} height={24}></Image>
				</div>
			</section>
			{/* 会社案内 */}
			<section className="flex flex-col items-center justify-center mx-20 pt-64">
				<div className="flex">
					<Image className="" src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
					<h2 className="pl-2 text-af-sm">会社案内</h2>
				</div>
				<motion.section
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false, amount: 0.5 }}>
					<AnimatedSectionTitle text="Our&nbsp;Mission" className="mt-4 mb-16 text-outline-black text-af-lg font-bold animate" />
				</motion.section>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration: 2 }}>
					<Image src="top_ourmissiontitle.svg" alt="お客様の成功と笑顔を広げ、社会、社員を豊かに" width={703} height={317}></Image>
				</motion.div>

				<h3 className="pt-20 text-af-xs">
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
				</h3>
				<Button title="サービスへ" link="/services"/>
				<div className="flex items-center justify-center space-x-10 mt-10 mb-44">
					<motion.div
						initial={{ x: '-100%' }}
						animate={{ x: '100%' }}
						transition={{
							duration: 20, ease: 'linear', repeat: Infinity, repeatType: 'loop',
						}} >
						<Image src="top_ourmissionshapes.svg" alt="" width={1300} height={240}></Image>
					</motion.div>
				</div>
			</section>
			{/* 事業概要（Service） */}
			<section className="bg-af-black px-20 pt-20">
				<div className="flex">
					<Image src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
					<h2 className="pl-2 text-af-sm text-af-white">事業概要</h2>
				</div>
				<AnimatedSectionTitle text="Service" className="text-outline-black text-af-lg font-bold animate" />
				<h3 className="pt-10 text-af-xs text-af-white">
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/>
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト<br/><br/>
					★ベン図の実装難しいので一旦飛ばしてます。
				</h3>
				<div className="flex h-screen overflow-hidden">
					{/* 左側固定コンテンツ（ベン図） */}
					<div className="flex-1 h-full overflow-y-auto">
						<div className="p-8">
							<h2 className="text-af-white" >ここにベン図を配置</h2>
						</div>
					</div>
					{/* 右側スクロールコンテンツ */}
					<div className="flex-1 h-full overflow-y-auto">
						{/* SI事業 */}
						<div className="mb-12">
							<div className="flex flex-col pt-16 pl-14 pr-8 border rounded-lg bg-af-white">
								<div className="flex">
									<Image src="top_serviceIcon_SI.svg" alt="" width={40} height={40}></Image>
									<h2 className="pl-2 text-af-md">SI事業</h2>
								</div>
								<h3 className="pt-6 text-af-xs">
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</h3>
								<div className="flex justify-end items-end pt-28 pb-12 pr-14">
									<Link className="text-af-xs text-af-orange" href="/">詳しく見る</Link>
									<ChevronRightIcon className="flex justify-center w-10 h-15 text-af-orange"></ChevronRightIcon>
								</div>
							</div>
						</div>
						{/* コンサルティング事業 */}
						<div className="mb-12">
							<div className="flex flex-col pt-16 pl-14 pr-8 border rounded-lg bg-af-white">
								<div className="flex">
									<Image src="top_serviceIcon_Consult.svg" alt="" width={40} height={40}></Image>
									<h2 className="pl-2 text-af-md">コンサルティング事業</h2>
								</div>
								<h3 className="pt-6 text-af-xs">
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</h3>
								<div className="flex justify-end items-end pt-28 pb-12 pr-14">
									<Link className="text-af-xs text-af-orange" href="/">詳しく見る</Link>
									<ChevronRightIcon className="flex justify-center w-10 h-15 text-af-orange"></ChevronRightIcon>
								</div>
							</div>
						</div>
						{/* 教育事業 */}
						<div className="mb-12">
							<div className="flex flex-col pt-16 pl-14 pr-8 border rounded-lg bg-af-white">
								<div className="flex">
									<Image src="top_serviceIcon_Edu.svg" alt="" width={40} height={40}></Image>
									<h2 className="pl-2 text-af-md">教育事業</h2>
								</div>
								<h3 className="pt-6 text-af-xs">
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
								</h3>
								<div className="flex justify-end items-end pt-28 pb-12 pr-14">
									<Link className="text-af-xs text-af-orange" href="/">詳しく見る</Link>
									<ChevronRightIcon className="flex justify-center w-10 h-15 text-af-orange"></ChevronRightIcon>
								</div>
							</div>
						</div>

					</div>
				</div>
				<div className="flex items-center justify-center">
					<Button title="サービスへ" link="/services"/>
				</div>
			</section>
			{/* 取扱製品一覧 */}
			<section className="flex flex-col items-center justify-center mx-20 mt-40">
				<div className="flex">
					<Image src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
					<h2 className="pl-2 text-af-sm">取扱製品一覧</h2>
				</div>
				<AnimatedSectionTitle text="Products" className="mt-4 mb-16 text-outline-black text-af-lg font-bold" />
			</section>
			{/* CELF */}
			<section className="mb-8 px-20 pt-16">
				<div className="flex rounded-tr-lg border border-af-black">
					<div className="w-1/2 p-20">
						<h3 className="border border-af-black rounded-lg w-28 p-1">★タグ未実装</h3>
						<h2 className="my-8 text-af-sm" >CELF（スプレッドシート型WEBアプリ + RPA）</h2>
						<h3 className="text-af-xs">
							「CELF」は、基幹システム外において、EXCEL等で行っている属人化した業務を、エンドユーザーでもWEBアプリとして作成できるソリューションです。
						</h3>
						<div className="flex justify-end items-end pt-10">
							<Link className="text-af-xs text-af-orange" href="/">詳しく見る</Link>
							<ChevronRightIcon className="flex justify-center w-10 h-15 text-af-orange"></ChevronRightIcon>
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
						<h2 className="my-8 text-af-sm" >Salesforce</h2>
						<h3 className="text-af-xs">
							コロナ禍、各企業は営業やマーケティングのあり方が、大幅に変わりつつあります。 対面営業からインサイドセールスへと、成長は止められない！<br/>
							私たちは、運用者が必要とする、トレーニングとサービスを提供をいたします。
						</h3>
						<div className="flex justify-end items-end pt-10">
							<Link className="text-af-xs text-af-orange" href="/">詳しく見る</Link>
							<ChevronRightIcon className="flex justify-center w-10 h-15 text-af-orange"></ChevronRightIcon>
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
							<h2 className="my-10 text-af-sm">InforM3</h2>
							<h3 className="text-af-xs">
								テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
							</h3>
							<div className="flex justify-end items-end pt-10">
								<Link className="text-af-xs text-af-orange" href="/">詳しく見る</Link>
								<ChevronRightIcon className="flex justify-center w-10 h-15 text-af-orange"></ChevronRightIcon>
							</div>
						</div>
						<div className="w-1/2 p-10">
							<div className="rounded-lg h-72 w-72 ml-auto border border-af-black">
							</div>
						</div>
					</div>
					<div className="w-1/2 flex rounded-tr-lg border border-af-black">
						<div className="w-1/2 p-10 mb-11">
							<h3 className="border border-af-black rounded-lg w-28 p-1">★タグ未実装</h3>
							<h2 className="my-10 text-af-sm">InforM3</h2>
							<h3 className="text-af-xs">
								テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
							</h3>
							<div className="flex justify-end items-end pt-10">
								<Link className="text-af-xs text-af-orange" href="/">詳しく見る</Link>
								<ChevronRightIcon className="flex justify-center w-10 h-15 text-af-orange"></ChevronRightIcon>
							</div>
						</div>
						<div className="w-1/2 p-10">
							<div className="rounded-lg h-72 w-72 ml-auto border border-af-black">
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="flex items-center justify-center mb-40">
				<Button title="製品一覧へ" link="/products"/>
			</div>
			{/* AFORCEAFORCEAFORCEAFORCE */}
			<section className="bg-af-yellow px-20">
				<motion.div className="flex justify-center items-center z-10"
					style={{ width: '100vw', overflow: 'hidden' }}
					initial={{ x: '-100%' }} // 初期位置は画面左外
					animate={{ x: '100%' }} // 画面右外に移動
					transition={{ duration: 15, ease: 'linear', repeat: Infinity }}>
					<Image src="top_orangeAforce.svg" alt="" width={1440} height={64}></Image>
				</motion.div>
			</section>
			{/* 採用情報 */}
			<section className="bg-af-black px-20 pt-20 pb-12">
				<div className="flex">
					<Image src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
					<h3 className="pl-2 text-af-sm text-af-white">採用情報</h3>
				</div>
				<AnimatedSectionTitle text="Recruit" className="mt-2.5 text-outline-black text-af-lg font-bold" />
				<motion.div
					initial={{ x: '-100%' }}
					animate={{ x: '100%' }}
					transition={{
						duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop',
					}} >
					<Image src="top_recruit5shapes.svg" alt="" width={1443} height={312}></Image>
				</motion.div>
				<div className='flex justify-end pr-64 pt-1.5'>
					<Image src="top_workwithus.svg" alt="" width={428.53} height={138.77}></Image>
				</div>
				<div>
					<h4 className="leading-loose text-af-sm text-af-white">
						未知の領域に挑戦し、自己成長したい方。<br/>
						ITを活用して社会に貢献し、社会を豊かにしたい方。<br/>
						エイ・フォースは、そんなビジョンを共有できる仲間をもとめています。
					</h4>
					<Button title="採用情報へ" link="/recruit"/>
				</div>
			</section>
			{/* お知らせ */}
			<section className="flex mt-72 px-20">
				<div className="w-1/2">
					<div className="flex mb-8">
						<Image src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
						<h3 className="pl-2 text-af-sm">お知らせ</h3>
					</div>
					<AnimatedSectionTitle text="News" className="mt-4 mb-16 text-outline-black text-af-lg font-bold" />
				</div>
				{/* ニュースリスト */}
				<div className="grid w-1/2 ">
					{newslist.map((item) => (
						<div key={item.key} className="grid grid-cols-4 gap-3 text-af-xs">
							<div className='col-span-3 my-8'>
								<Link href={item.path} >{item.title}</Link>
								<h3 className="border border-black rounded-lg my-2 w-32">{item.tagtitle}</h3>
							</div>
							<div className="col-span-1 flex items-center justify-center">
								<h3 className="font-bold">{item.date}</h3>
							</div>
						</div>
					))}
				</div>
			</section>
			<section className="flex justify-end items-end px-20 py-20">
				<Button title="ニュース一覧へ" link="https://a-force.themedia.jp/"/>
			</section>
			{/* セミナー情報 */}
			<section className="px-20 pt-20">
				<div className="flex mb-8">
					<Image src="top_orangepoint.svg" alt="" width={16} height={16}></Image>
					<h3 className="pl-2 text-af-sm">セミナー情報</h3>
				</div>
				<AnimatedSectionTitle text="Seminar" className="mt-4 mb-16 text-outline-black text-af-lg font-bold" />
				<div className="flex space-x-10 mb-48">
					<div className="w-1/2">
						{/* リンク先未設定 */}
						<Link href="/">
							<div className="flex justify-center items-center bg-af-gray border rounded-lg h-64">
								<p className="text-af-md">CELF</p>
							</div>
						</Link>
					</div>
					<div className="w-1/2">
						<Link href="/">
							<div className="flex justify-center items-center bg-af-gray border rounded-lg h-64">
								<p className="text-af-md">ITエース</p>
							</div>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
