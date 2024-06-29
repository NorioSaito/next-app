/* Culture画面 */

import React from 'react';
import Image from 'next/image';
import BreadcrumaTrail from '../../../_components/common/breadcrumb_trail';
import Harftitle from '../../../_components/common/HarfTitle';
import CultureItem from '../../../_components/common/CultureItem';

function Culture() {
	return (
		<div>
			<div>
				<div className="mx-[80px]">
					<div className="pagetitle mt-[207px]">
						<h1 className="text-af-lg">はたらく環境・文化を知る</h1>
					</div>
					<div className="breadcrumb mt-[30px]">
						<BreadcrumaTrail />
					</div>
					<section className="mt-[56px] relative">
						<Image src="/img/company_heroimg.jpg" alt="" width={1280} height={480} />
					</section>
					<div className="mt-[240px] leading-[64px] tracking-widest flex justify-center">
						<h1 className="w-[973px] text-af-sm">
							テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
						</h1>
					</div>
				</div>
				<section className="mt-[134px] pt-[70px] pb-[100px] bg-[#599bfe] grid-cols">
					<div className="pl-[80px]">
						<div className="flex items-center">
							<Harftitle
								title="Culture"
								subTitle="社風を知る"
								text_position="start"
							></Harftitle>
							<div className="h-[154px] ml-auto flex items-center justify-center">
								<div className="text-[18rem] font-black bg-gradient-to-b from-[#4980fe] to-af-[599bfe] to-95% bg-clip-text text-transparent">
									CULTURE
								</div>
							</div>
						</div>
					</div>
					<div className="px-[80px]">
						<div className="pt-[39px] flex items-center justify-center">
							<CultureItem
								number="01"
								text="ワークライフバランス重視"
								imageUrl="/img/scales.svg"
								imageWidth={90}
								imageHight={103}
							/>
							<div className="mx-[80px]">
								<CultureItem
									number="02"
									text="若手が育ちやすい"
									imageUrl="/img/scales.svg"
									imageWidth={112}
									imageHight={120}
								/>
							</div>
							<CultureItem
								number="03"
								text="どんどん昇進"
								imageUrl="/img/stairs.svg"
								imageWidth={90}
								imageHight={103}
							/>
						</div>
						<div className="pt-[43px] pb-[85px] flex items-center justify-center">
							<CultureItem
								number="04"
								text="子どもがいても働きやすい"
								imageUrl="/img/mother.svg"
								imageWidth={90}
								imageHight={103}
							/>
							<div className="mx-[80px]">
								<CultureItem
									number="05"
									text="健康第一"
									imageUrl="/img/heart.svg"
									imageWidth={112}
									imageHight={120}
								/>
							</div>
							<CultureItem
								number="06"
								text="部活動"
								imageUrl=""
								imageWidth={90}
								imageHight={103}
							/>
						</div>
					</div>
				</section>
				<section className="pt-[70px] pb-[187px] bg-[#FAF7ED] grid-cols">
					<div className="pl-[80px]">
						<div className="flex items-center">
							<Harftitle
								title="Education"
								subTitle="研修・教育制度を知る"
								text_position="start"
							></Harftitle>
							<div className="h-[154px] ml-auto flex items-center justify-center">
								<div className="text-[18rem] font-black bg-gradient-to-b from-[#eee4c0] to-af-[FAF7ED] to-95% bg-clip-text text-transparent">
									EDUCATION
								</div>
							</div>
						</div>
					</div>
					<div className="px-[80px]">
						<p className="text-af-xs mt-[32px] mb-[41px] leading-[1.6] tracking-wide">
							エイ・フォースが一番大切にしているものは、「人」です。
							<br />
							人を大切にするエイ・フォースでの社員の成長環境や研修制度についてご紹介します。
						</p>
						<div>
							<div className="h-[40px] mt-[20px] flex">
								<Image
									src="/img/SIservicetitle.svg"
									alt=""
									width={40}
									height={40}
								/>
								<h2 className="ml-[40px] text-af-md font-bold flex items-center justify-center">
									研修制度
								</h2>
							</div>
							<div className="mt-[40px] ml-[80px] leading-[1.6] tracking-wide">
								<h3 className="text-af-sm font-bold">
									プログラミング未経験でも安心の教育サポート
								</h3>

								<p className="text-af-xs mt-[19px] mb-[40px]">
									エイ・フォースではプログラミングに詳しくない方でもIT業界で活躍できるための教育プログラム、
									<br />
									「ITエース養成塾」を運営しています。入社後はITエース養成塾で、約3ヶ月間WEBプログラミング
									<br />
									の基礎を学んでいただきます。
								</p>
							</div>
							<div className="w-full h-[240px] mt-[72px] border border-af-black rounded-[16px] tracking-wide bg-[#ffffff]">
								画像が入る予定
							</div>
						</div>
						<div>
							<div className="h-[40px] mt-[64px] flex">
								<Image
									src="/img/SIservicetitle.svg"
									alt=""
									width={40}
									height={40}
								/>
								<h2 className="ml-[40px] text-af-md font-bold flex items-center justify-center">
									その他の教育支援施策
								</h2>
							</div>
							<div className="pt-[68px] flex items-center justify-center">
								<div className="relative w-[373px] h-[373px] bg-white rounded-t-[186.5px] rounded-b-[16px] border border-af-black shadow-[16px_16px_0px_0px_#efe5c3] flex flex-col items-center justify-center tracking-wide">
									<h1 className="text-af-sm font-bold">書籍</h1>
									<div className="mt-[31px]">
										<Image
											src="/img/scales.svg"
											alt=""
											width={90}
											height={103}
										/>
									</div>
									<p className="w-[255px] mt-[45px] text-af-xs leading-[1.6]">
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
									</p>
								</div>
								<div className="mx-[80px] relative w-[373px] h-[373px] bg-white rounded-t-[186.5px] rounded-b-[16px] border border-af-black shadow-[16px_16px_0px_0px_#efe5c3] flex flex-col items-center justify-center tracking-wide">
									<h1 className="text-af-sm font-bold">
										ワークライフバランス重視
									</h1>
									<div className="mt-[31px]">
										<Image
											src="/img/scales.svg"
											alt=""
											width={90}
											height={103}
										/>
									</div>
									<p className="w-[255px] mt-[45px] text-af-xs leading-[1.6]">
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
									</p>
								</div>
								<div className="relative w-[373px] h-[373px] bg-white rounded-t-[186.5px] rounded-b-[16px] border border-af-black shadow-[16px_16px_0px_0px_#efe5c3] flex flex-col items-center justify-center tracking-wide">
									<h1 className="text-af-sm font-bold">
										ワークライフバランス重視
									</h1>
									<div className="mt-[31px]">
										<Image
											src="/img/scales.svg"
											alt=""
											width={90}
											height={103}
										/>
									</div>
									<p className="w-[255px] mt-[45px] text-af-xs leading-[1.6]">
										テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="pt-[70px] pb-[187px] bg-[#58D073] grid-cols">
					<div className="pl-[80px]">
						<div className="flex items-center">
							<Harftitle
								title="Data"
								subTitle="数字を知る"
								text_position="start"
							></Harftitle>
							<div className="h-[154px] ml-auto flex items-center justify-center">
								<div className="text-[18rem] font-black bg-gradient-to-b from-[#24c046] to-af-[58D073] to-95% bg-clip-text text-transparent">
									DATA
								</div>
							</div>
						</div>
					</div>
					<div className="px-[80px]">
						<div>
							<div className="mt-[32px] flex items-center justify-center">
								<div className="w-[620px]  border border-af-black rounded-[16px] tracking-wide bg-[#ffffff]">
									<h2 className="pt-[20px] pl-[25px] text-af-sm font-bold tracking-wide">
										男女比
									</h2>
									<div className="w-full h-[180px] flex items-center justify-center">
										<div>
											<Image
												src="/img/sexratio.svg"
												alt=""
												width={318}
												height={160}
											/>
										</div>
									</div>
									<div className="mb-[25px] h-[40px] flex items-center">
										<h2 className="ml-[150px] text-[#599BFE] text-[48px] font-bold">
											60
										</h2>
										<p className="text-af-sm">%</p>
										<h2 className="ml-[175px] text-[#FF5C00] text-[48px] font-bold">
											40
										</h2>
										<p className="text-af-sm">%</p>
									</div>
								</div>
								<div className="ml-[39px] w-[620px] border border-af-black rounded-[16px] tracking-wide bg-[#ffffff]">
									<h2 className="pt-[20px] pl-[25px] text-af-sm font-bold tracking-wide">
										設立
									</h2>
									<div className="w-full h-[180px] flex items-center justify-center">
										<div>
											<Image
												src="/img/building.svg"
												alt=""
												width={73}
												height={106}
											/>
										</div>
									</div>
									<div className="mb-[25px] h-[40px] flex items-center justify-center">
										<h2 className="text-[#FF5C00] text-[48px] font-bold">
											2003
										</h2>
										<p className="text-af-sm">年</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Culture;
