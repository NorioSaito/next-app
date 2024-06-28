import React from 'react';
import Image from 'next/image';
import MemberSection from './member_section';
import Harftitle from '../../_components/common/HarfTitle';
import Button from '../../_components/common/Button';
import DoorCard from '../../_components/common/door_card';
import RecruitHeader from './recruit_header';
import RecruitFooter from './recruit_footer';

function Recruit() {
	return (
		<>
			<RecruitHeader />
			<section className="bg-af-white relative mt-[14.4rem] ">
				<div className="grid justify-items-center">
					<Image
						className=""
						src="openup.svg"
						alt="OPENUP"
						width={1176}
						height={200}
					></Image>
					<div className="flex gap-[29.6rem] text-[4.8rem]">
						<p>エースの力で</p>
						<p>切りひらけ、未来。</p>
					</div>
					<div className="flex gap-[29.6rem] text-[15rem]">
						<p>FUT</p>
						<p>URE</p>
					</div>
				</div>
				<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[40rem] w-[29.6rem] rounded-t-[200px] rounded-b-[16px] bg-af-black">
					<video
						className="h-full w-full rounded-t-[200px] rounded-b-[16px] object-cover"
						autoPlay
						loop
						muted
						playsInline
					>
						<source src="slider.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</section>
			{/* リード */}
			<section className="relative bg-af-yellow pb-[16rem] text-center w-[100%]">
				<div className="flex justify-center">
					<Image
						className=""
						src="recruit_a.svg"
						alt="A"
						width={880}
						height={252}
					></Image>
				</div>
				<div className="leading-[5.6rem] text-af-sm font-normal mb-[1.6rem] mt-[4rem]">
					<p>エイ・フォースはひとを大切にする会社です。</p>
					<p>お客様が満足し成功をおさめることで、</p>
					<p>人びとにポジティブな影響をあたえ、</p>
					<p>より豊かで調和のとれた社会を実現します。</p>
					<p>また、社員ひとりひとりが誇りをもち、</p>
					<p>やりがいを感じられる職場環境を提供することで、</p>
					<p>社員の幸福と成長を追求します。</p>
					<p>お客様、社会、そして社員のすべてがともに成長し</p>
					<p>豊かさを享受できる未来をめざしてあゆみつづけます。</p>
				</div>
				<h3 className="leading-[7.2rem] text-[4.8rem] font-bold">
					エースのちからで切りひらけ、未来。
				</h3>
			</section>
			{/* エイ・フォースって？ */}
			<section className="grid grid-cols-2 p-[8rem]">
				<div>
					<div className="mb-[2.4rem]">
						<Harftitle
							title="What's A-force"
							subTitle="エイ・フォースって？"
							text_position="start"
							sub_color="black"
						/>
					</div>
					<h3 className="text-af-sm mt-[3.2rem] mb-[2.4rem]">エースの力で社会を豊かに</h3>
					<div className="grid gap-[1.6rem]">
						<div className="text-af-xs">
							<p>社名の由来は、</p>
							<p>「ここ一番で頼りになるエースの力を発揮できる集団」</p>
							<p>という意味をこめております。</p>
						</div>
						<div className="text-af-xs">
							<p>エイ・フォースの理念は、</p>
							<p>お客様の成功と笑顔をひろげていくこと。</p>
							<p>社会がゆたかになること。</p>
							<p>はたらく社員とその家族がゆたかになること。</p>
							<p>豊かさを追求し続けられる環境をつくりだすこと。</p>
						</div>
						<div className="text-af-xs">
							<p>社員一人ひとりがエースとなり、ともに成長し、困難な状況でも、</p>
							<p>まっすぐ歩いていける組織づくりをめざしております。</p>
						</div>
					</div>
				</div>
				<div>
					<Image
						className="pb-24"
						src="top_Alogo.svg"
						alt="エイ・フォース株式会社"
						width={557}
						height={496}
					></Image>
				</div>
			</section>
			{/* はたらく環境・文化を知る */}
			<section className="grid grid-cols-2 bg-af-black p-[8rem]">
				<div>
					<div></div>
					<Harftitle
						title="Culture"
						subTitle="はたらく環境・文化を知る"
						text_position="start"
						sub_color="white"
					></Harftitle>
					<div className="mb-[10rem] text-af-xs text-af-white">
						<p>エイ・フォースのはたらく環境・文化を、</p>
						<p>図や数字を用いてわかりやすく紹介します。</p>
					</div>
					<Button title="はたらく環境・文化を知る" link=""></Button>
				</div>
				<div className="relative">
					<div className="absolute z-10 top-[-12rem] right-[-7rem] text-[18rem] font-black bg-gradient-to-b from-black to-af-black to-80% bg-clip-text text-transparent">
						CULTURE
					</div>
					<div className="relative flex z-20 justify-end">
						<Image
							className="pb-24"
							src="/top_lecturehand.jpg"
							alt="エイ・フォース株式会社"
							width={320}
							height={557}
						></Image>
					</div>
				</div>
			</section>
			{/* 社員紹介 */}
			<MemberSection />
			{/* 募集要項 */}
			<section className="grid grid-cols-2">
				<div className="grid gap-[4rem] justify-center bg-af-yellow">
					<div className="mt-[4rem]">
						<Harftitle
							title="Newgrad"
							subTitle="新卒採用募集要項"
							text_position="center"
							sub_color="black"
						></Harftitle>
					</div>
					<DoorCard main="新卒採用" sub="" img="" text="" sdcolor="black" />
					<div className="flex justify-center mb-[4rem]">
						<Button title="新卒募集要項へ" link="" />
					</div>
				</div>
				<div className="grid gap-[4rem] justify-center bg-af-deepgray">
					<div className="mt-[4rem]">
						<Harftitle
							title="Career"
							subTitle="中途採用用募集要項"
							text_position="center"
							sub_color="black"
						></Harftitle>
					</div>
					<DoorCard
						main=""
						sub=" 現在エンジニアの中途採用はおこなっておりません"
						img=""
						text="27歳までの第2新卒・大学院卒のIT未経験者は、新卒に近い条件またはスクール経由での採用を行います。
詳しくはお問い合わせください。"
						sdcolor="black"
					/>
					<div className="flex justify-center mb-[4rem]">
						<Button title="お問い合わせへ" link="" />
					</div>
				</div>
			</section>
			<RecruitFooter />
		</>
	);
}

export default Recruit;
