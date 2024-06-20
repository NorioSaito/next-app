import React from 'react';
import Image from 'next/image';
import Harftitle from '../../_components/common/HarfTitle';

function Company() {
	return (
		<body>
			<div className="mx-[8rem]">
				<div className="pagetitle mt-[207px]">
					<h1 className="text-[6.4rem]">Company</h1>
				</div>
				<div className="breadcrumb mt-[3rem]">
					<p>ここにパンくずリストを実装</p>
				</div>
				<section className="mt-[5.6rem] relative">
					<Image src="/company_heroimg.jpg" alt="" width={1280} height={480} />
					<div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' >
						<Image src="/company_herotext.svg" alt="" width={400} height={214} />
					</div>
				</section>
				<section className="mt-[10.4rem]">
					<Harftitle title="Mission" subTitle="経営理念" text_position="center"></Harftitle>
				</section>
				<section className="mt-[8rem] grid-cols-3">
					<h1 className="text-[4.8rem] leading-[1.6] tracking-wide text-center">お客様の成功と笑顔を広げ、<br></br
					>社会、社員を豊かに。
					</h1>
					<p className="mt-[30px] text-[2.0rem] leading-[3.2] tracking-widest text-center">エイ・フォースはひとを大切にする会社です。<br></br>
					お客様が満足し成功をおさめることで、<br></br>
					人びとにポジティブな影響をあたえ、<br></br>
					より豊かで調和のとれた社会を実現します。<br></br>
					また、社員ひとりひとりが誇りをもち、<br></br>
					やりがいを感じられる職場環境を提供することで、<br></br>
					社員の幸福と成長を追求します。<br></br>
					お客様、社会、そして社員のすべてがともに成長し<br></br>
					豊かさを享受できる未来をめざしてあゆみつづけます。
					</p>
					<div className='pt-[8rem] flex items-center justify-center'>
						<Image src="/company_img1.jpg" alt="" width={309} height={225} />
					</div>
				</section>
			</div>
			<section className="mt-[16rem] h-[480px] bg-af-yellow">
				<div className="mx-[8rem] flex">
					<div className="flex items-center pr-[41.7rem]">
						<Harftitle title="Vision" subTitle="行動理念" text_position="start"></Harftitle>
					</div>
					<div className="grid-cols-5 justify-start">
						<div className='mb-[40px] flex text-[2.4rem]'>
							<p className='text-white mr-[50px]'>01</p>
							<p className=''>期待を超えるサービスでお客様に感動をお届けする</p>
						</div>
						<div className='mb-[40px] flex text-[2.4rem]'>
							<p className='text-white mr-[50px]'>02</p>
							<p className=''>お客様と一生おつき合いできる関係づくりを目指す</p>
						</div>
						<div className='mb-[40px] flex text-[2.4rem]'>
							<p className='text-white mr-[50px]'>03</p>
							<p className=''>世の中に意味のある商品を創造・提供する</p>
						</div>
						<div className='mb-[40px] flex text-[2.4rem]'>
							<p className='text-white mr-[50px]'>04</p>
							<p className=''>常に社員が進化しながら夢をもって働ける職場をつくる</p>
						</div>
						<div className='flex text-[2.4rem]'>
							<p className='text-white mr-[50px]'>05</p>
							<p className=''>成長を糧に、豊かな人生を実現できる組織を目指す</p>
						</div>
					</div>
				</div>
			</section>
		</body>
	);
}

export default Company;
