import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/_components/button';
import Breadcrumb from '../../_components/common/breadcrumb_trail';

function Services() {
	return (
		<div>
			<div className="pagetitle ml-[8rem] mt-[207px]">
				<h1 className="text-[6.4rem]">Service</h1>
			</div>
			<div className="breadcrumb ml-24 mt-4">
				<Breadcrumb />
			</div>
			<section className="section1 mt-[80px]">
				<h1 className="section1-title text-af-lg font-bold leading-[1.6] tracking-wider w-[486px]">
					テキストテキストテキストテキスト
				</h1>
				<p className="section1-text text-af-xs mt-[24px] leading-[1.6] tracking-wider w-[714px]">
					テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
				</p>
			</section>
			<section className="SIservice mt-[142px]">
				<p>(01)</p>
				<div className="SIservicecontents flex">
					<div className="w-1/2 h-[40px] mt-[20px] flex">
						<Image src="/img/SIservicetitle.svg" alt="" width={40} height={40} />
						<h2 className="SIservicetitle ml-[8px] text-af-md font-bold flex items-center justify-center">
							SI事業
						</h2>
					</div>
					<div className="SIservicesection w-1/2 mt-6">
						<h2 className="SIservicetexttitle text-xl font-bold">
							テキストテキストテキスト
						</h2>
						<p className="SIservicetitle text-sm mt-6">
							テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
						</p>
						<Link
							href="/services/si"
							className="text-sm font-semibold leading-6 text-black flex items-center"
						>
							<button className="bg-gray-500 hover:bg-gray-400 text-white rounded px-4 py-2 mt-6">
								SI事業詳細へ移動するボタン
							</button>
						</Link>

						<div className="mt-6 h-px bg-gray-300"></div>
						<div className="SIservicecontents">
							<p className="text-sm mt-6">主なサービス内容</p>
							<p className="text-sm mt-2">
								テキスト/テキスト/テキスト/テキスト/テキスト
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="my-[80px] h-px bg-gray-300"></div>
			<section className="Consultingservice">
				<p>(02)</p>
				<div className="Consultingservicecontents flex">
					<div className="w-1/2 h-[40px] mt-[20px] flex">
						<Image
							src="/img/Consaltingservicetitle.svg"
							alt=""
							width={40}
							height={40}
						/>
						<h2 className="SIservicetitle ml-[8px] text-af-md font-bold flex items-center justify-center">
							コンサルティング事業
						</h2>
					</div>
					<div className="w-1/2 mt-[25px]">
						<h2 className="Consaltingservicetexttitle text-af-sm font-bold leading-[1.6] tracking-wider">
							テキストテキストテキスト
						</h2>
						<p className="Consaltingservicetext text-af-xs mt-[41px] leading-[1.6] tracking-wider">
							テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
						</p>
						<div className="pt-[50px] flex justify-end">
							<Button
								title="コンサルティング事業へ"
								link="/services/consulting"
							></Button>
						</div>
						<div className="my-[32px] h-px bg-gray-300"></div>
						<div>
							<p className="text-af-xs tracking-wider">主なサービス内容</p>
							<p className="text-af-xs mt-[16px] tracking-wider">
								テキスト/テキスト/テキスト/テキスト/テキスト
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="my-[80px] h-px bg-gray-300"></div>
			<section className="Educationservice pb-[312px]">
				<p>(03)</p>
				<div className="Educationservicecontents flex">
					<div className="w-1/2 h-[40px] mt-[20px] flex">
						<Image src="/img/Educationservicetitle.svg" alt="" width={40} height={40} />
						<h2 className="Educationservicetitle ml-[8px] text-af-md font-bold flex items-center justify-center">
							教育事業
						</h2>
					</div>
					<div className="w-1/2 mt-[25px]">
						<h2 className="Educationservicetexttitle text-af-sm font-bold leading-[1.6] tracking-wider">
							テキストテキストテキスト
						</h2>
						<p className="Educationservicetext text-af-xs mt-[41px] leading-[1.6] tracking-wider">
							テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
						</p>
						<div className="pt-[50px] flex justify-end">
							<Button title="教育事業へ" link="/education"></Button>
						</div>
						<div className="my-[32px] h-px bg-gray-300"></div>
						<div>
							<p className="text-af-xs tracking-wider">主なサービス内容</p>
							<p className="text-af-xs mt-[16px] tracking-wider">
								テキスト/テキスト/テキスト/テキスト/テキスト
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Services;
