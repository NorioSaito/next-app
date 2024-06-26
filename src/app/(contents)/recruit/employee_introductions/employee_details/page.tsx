/* 社員紹介詳細画面 */

'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../../../../_components/common/Button';
import BreadcrumaTrail from '../../../../_components/common/breadcrumb_trail';

const Employee_Details: React.FC = () => {

	// 目次イベント
	const scrollToElement = (id: string) => {
		const element = document.querySelector(`#${id}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	// イベントハンドラ
	const handleScrollToQ1 = () => scrollToElement('targetQ1');
	const handleScrollToQ2 = () => scrollToElement('targetQ2');
	const handleScrollToQ3 = () => scrollToElement('targetQ3');
	const handleScrollToQ4 = () => scrollToElement('targetQ4');
	const handleScrollToQ5 = () => scrollToElement('targetQ5');
	const handleScrollToQ6 = () => scrollToElement('targetQ6');

	return (
		<div>
			<div className="mx-[80px]">
				<div className="pagetitle mt-[207px]">
					<h1 className="text-af-lg">Interview#1</h1>
				</div>
				<div className="breadcrumb mt-[30px]">
					<BreadcrumaTrail />
				</div>
				<section className="mt-[56px] relative">
					<Image src="/company_heroimg.jpg" alt="" width={1280} height={480} />
				</section>
				<div className="w-[480px] mt-[64px] font-bold leading-[1.6] tracking-wide">
					<h1 className="text-af-lg">タイトルタイトルタイトルタイトル</h1>
				</div>
				<section className="flex items-center justify-center">
					<div className="w-[400px] mt-[72px] border border-af-black rounded-[16px] tracking-wide">
						<h2 className="my-[26px] text-af-sm font-bold text-center">目次</h2>
						<div className="px-[40px] mb-[26px] grid-cols-6 ">
							<div className="flex items-center">
								<h2 className="w-[50px] pr-[20px] text-af-sm font-bold">Q1</h2>
								<p className="text-af-xs hover:underline" onClick={handleScrollToQ1}>エイ・フォースってどんな会社？</p>
							</div>
							<div className="pt-[8px] flex items-center">
								<h2 className="w-[50px] pr-[20px] text-af-sm font-bold">Q2</h2>
								<p className="text-af-xs hover:underline" onClick={handleScrollToQ2}>入社してからこれまでのキャリアは？</p>
							</div>
							<div className="pt-[8px] flex items-center">
								<h2 className="w-[50px] pr-[20px] text-af-sm font-bold">Q3</h2>
								<p className="text-af-xs hover:underline" onClick={handleScrollToQ3}>現在どんな業務をしていますか？</p>
							</div>
							<div className="pt-[8px] flex items-center">
								<h2 className="w-[50px] pr-[20px] text-af-sm font-bold">Q4</h2>
								<p className="text-af-xs hover:underline" onClick={handleScrollToQ4}>どんな方が活躍できますか？</p>
							</div>
							<div className="pt-[8px] flex items-center">
								<h2 className="w-[50px] pr-[20px] text-af-sm font-bold">Q5</h2>
								<p className="text-af-xs hover:underline" onClick={handleScrollToQ5}>休日の過ごし方は？</p>
							</div>
							<div className="pt-[8px] flex items-center">
								<h2 className="w-[50px] pr-[20px] text-af-sm font-bold">Q6</h2>
								<p className="text-af-xs hover:underline" onClick={handleScrollToQ6}>ひとことメッセージ</p>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="w-full mt-[168px] py-[80px] border border-af-black rounded-[16px] grid-cols-5">
						<div className="flex items-center justify-center">
							<div className="w-[751px] mb-[26px] grid-cols-3 justify-start">
								<div className="flex items-center justify-start">
									<h2 id="targetQ1" className="w-[50px] pr-[110px] text-af-lg font-bold">Q1</h2>
									<p className="text-af-md font-bold tracking-wide">エイ・フォースってどんな会社？</p>
								</div>
								<div className="pt-[41px] flex items-center">
									<p className="text-af-xs leading-[2.4] tracking-wide">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス</p>
								</div>
								<div className="mt-[100px]">
									<Image src="/company_heroimg.jpg" alt="" width={751} height={294} />
								</div>
							</div>
						</div>
						<div className="mt-[100px] flex items-center justify-center">
							<div className="w-[751px] mb-[26px] grid-cols-2 justify-start">
								<div className="flex items-center justify-start">
									<h2 id="targetQ2" className="w-[50px] pr-[110px] text-af-lg font-bold">Q2</h2>
									<p className="text-af-md font-bold tracking-wide">入社してからこれまでのキャリアは？</p>
								</div>
								<div className="pt-[41px] flex items-center">
									<p className="text-af-xs leading-[2.4] tracking-wide">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス</p>
								</div>
							</div>
						</div>
						<div className="mt-[100px] flex items-center justify-center">
							<div className="w-[751px] mb-[26px] grid-cols-3 justify-start">
								<div className="flex items-center justify-start">
									<h2 id="targetQ3" className="w-[50px] pr-[110px] text-af-lg font-bold">Q3</h2>
									<p className="text-af-md font-bold tracking-wide">現在どんな業務をしていますか？</p>
								</div>
								<div className="pt-[41px] flex items-center">
									<p className="text-af-xs leading-[2.4] tracking-wide">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス</p>
								</div>
								<div className="mt-[100px]">
									<Image src="/company_heroimg.jpg" alt="" width={751} height={294} />
								</div>
							</div>
						</div>
						<div className="mt-[100px] flex items-center justify-center">
							<div className="w-[751px] mb-[26px] grid-cols-2 justify-start">
								<div className="flex items-center justify-start">
									<h2 id="targetQ4" className="w-[50px] pr-[110px] text-af-lg font-bold">Q4</h2>
									<p className="text-af-md font-bold tracking-wide">どんな方が活躍できますか？</p>
								</div>
								<div className="pt-[41px] flex items-center">
									<p className="text-af-xs leading-[2.4] tracking-wide">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス</p>
								</div>
							</div>
						</div>
						<div className="mt-[100px] flex items-center justify-center">
							<div className="w-[751px] mb-[26px] grid-cols-3 justify-start">
								<div className="flex items-center justify-start">
									<h2 id="targetQ5" className="w-[50px] pr-[110px] text-af-lg font-bold">Q5</h2>
									<p className="text-af-md font-bold tracking-wide">休日の過ごし方は？</p>
								</div>
								<div className="pt-[41px] flex items-center">
									<p className="text-af-xs leading-[2.4] tracking-wide">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス
	テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス</p>
								</div>
								<div className="mt-[100px]">
									<Image src="/company_heroimg.jpg" alt="" width={751} height={294} />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section>
					<div className="mt-[80px] flex items-center justify-center">
						<div className="mb-[26px] grid-cols-4 justify-center">
							<h2 id="targetQ6" className="text-af-lg font-bold text-center">Q6</h2>
							<p className="text-af-md font-bold text-center tracking-wide">ひとことメッセージ</p>
							<div className="relative mx-auto mt-[51px] w-[373px] h-[373px]">
								<div className="absolute top-0 left-0 w-full h-full bg-[#EDD8D8] transform translate-x-[16px] translate-y-[16px] rounded-t-[186.5px] rounded-b-[16px] z-0"></div>
								<Image src="/A-force_horizon.svg" alt="" width={373} height={373} className="bg-[#ffffff] relative w-full h-full border border-af-black rounded-t-[186.5px] rounded-b-[16px] z-10"/>
							</div>
							<p className="pt-[60px] w-[445px] text-af-xs leading-[1.6] tracking-wide">テキストテキストテキストテキストテキストテキストテキスト
テキストテキストテキストテキストテキストテキストテキスト
テキストテキストテキストテキストテキストテキストテキスト</p>
						</div>
					</div>
				</section>
				<section className="my-[160px] flex justify-center">
					<Button title="社員紹介TOPへ" link="/recruit/employee_introductions"></Button>
				</section>
			</div>
		</div>
	);
}

export default Employee_Details;
