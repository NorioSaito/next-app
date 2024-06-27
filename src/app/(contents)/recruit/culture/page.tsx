/* Culture画面 */

import React from 'react';
import Image from 'next/image';
import BreadcrumaTrail from '../../../_components/common/breadcrumb_trail';
import Harftitle from '../../../_components/common/HarfTitle';

function New_graduate_recruitment() {

	return (
		<div>
			<div className="mx-[80px]">
				<div className="pagetitle mt-[207px]">
					<h1 className="text-af-lg">はたらく環境・文化を知る</h1>
				</div>
				<div className="breadcrumb mt-[30px]">
					<BreadcrumaTrail />
				</div>
				<section className="mt-[56px] relative">
					<Image src="/company_heroimg.jpg" alt="" width={1280} height={480} />
				</section>
                <div className="mt-[240px] leading-[64px] tracking-widest flex justify-center">
					<h1 className="w-[973px] text-af-sm">テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</h1>
				</div>
				<section className="mt-[72px]">
					<Harftitle title="Ideal" subTitle="求める人物像" text_position="start"></Harftitle>
				</section>
                <section className="mt-[66px]">
					<div className="grid-rows-5">
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className="w-[250px] text-af-sm font-bold">論理力</p>
							<p className="text-af-xs">起承転結で会話ができる。聴ける。</p>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className="w-[250px] text-af-sm font-bold">経験と背景</p>
							<div className="grid-rows-4">
								<p className="text-af-xs">真剣に取り組んだ事（勉強、部活、サークル、アルバイト等）</p>
								<p className="mt-[10px] text-af-xs">・どのように取り組んだか</p>
								<p className="mt-[10px] text-af-xs">・困難にどのように立ち向かったか</p>
                                <p className="mt-[10px] text-af-xs">・どんな成長をしたか</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
							<p className="w-[250px] text-af-sm font-bold">素直さ</p>
							<p className="text-af-xs">正直に話ができる。素直に話を聞ける。</p>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
                        <div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className="w-[250px] text-af-sm font-bold">主体性・行動力</p>
							<p className="text-af-xs">新しい事へチャレンジ。自発的。</p>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className="w-[250px] text-af-sm font-bold">ポジティブ思考</p>
							<p className="text-af-xs">前向きに考え行動できる。諦めない。失敗を恐れない。</p>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
					</div>
				</section>
                <section className="mt-[72px]">
					<Harftitle title="Infomation" subTitle="募集要項" text_position="start"></Harftitle>
				</section>
				<section className="mt-[66px]">
					<div className="tracking-wide">
						<div className="grid-rows-7">
							<div className="flex ml-[30px]">
								<p className="w-[250px] text-af-sm font-bold">募集職種</p>
                                <div className="grid-rows-2 text-af-xs">
                                    <p>・エンジニア/コンサルタント</p>
                                    <p className="mt-[10px]">・企画＆営業（Si営業、スクール展開と営業、マーケター）</p>
                                </div>
							</div>
							<div className="my-[24px] h-px bg-slate-200"></div>
							<div className="flex ml-[30px]">
								<p className="w-[250px] text-af-sm font-bold">基本給</p>
                                <div className="grid-rows-4 text-af-xs">
                                    <p>・新卒初任給：年俸300万円（月基本22万円＋禁煙手当＋実家の場合）<br/>
                                    　※院卒の場合、別途上増し基本給を設定しています。</p>
                                    <p className="mt-[10px]">・30歳モデル賃金：年俸：約500万円（残業、手当含む）</p>
                                    <p className="mt-[10px]">・40歳モデル賃金：年俸：約800万円（管理職手当、残業含む）</p>
                                </div>
							</div>
							<div className="my-[24px] h-px w-auto bg-slate-200"></div>
							<div className="flex items-center ml-[30px]">
								<p className="w-[250px] text-af-sm font-bold">勤務地</p>
								<p className="text-af-xs">・本社/常駐先/リモートワーク</p>
							</div>
							<div className="my-[24px] h-px bg-slate-200"></div>
							<div className="flex items-center ml-[30px]">
								<p className="w-[250px] text-af-sm font-bold">勤務時間</p>
								<p className="text-af-xs">・9:30～18：00（休憩1時間）</p>
							</div>
							<div className="my-[24px] h-px bg-slate-200"></div>
							<div className="flex ml-[30px]">
								<p className="w-[250px] text-af-sm font-bold">休日・休暇</p>
                                <div className="grid-rows-2 text-af-xs">
                                    <p>・完全週休2日制、祝祭日</p>
                                    <p className="mt-[10px]">・年末年始休暇、有給休暇、産前休暇、産後休暇、育児休暇</p>
                                </div>
							</div>
							<div className="my-[24px] h-px bg-slate-200"></div>
							<div className="flex items-center ml-[30px]">
								<p className="w-[250px] text-af-sm font-bold">服装</p>
								<p className="text-af-xs">服装自由（TPOをわきまえていれば）</p>
							</div>
							<div className="my-[24px] h-px bg-slate-200"></div>
							<div className="flex ml-[30px]">
								<p className="w-[250px] text-af-sm font-bold">福利厚生・手当</p>
                                <div className="grid-rows-9 text-af-xs">
                                    <p>・各種社会保険完備<br/>
                                    　関東ITソフトウェア健保　https://www.its-kenpo.or.jp/index.html</p>
                                    <p className="mt-[10px]">・超過勤務手当（1日8時間超える場合は支給)</p>
                                    <p className="mt-[10px]">・通勤交通費（全額）</p>
                                    <p className="mt-[10px]">・住宅手当（5千円～2万円　実家の場合5千円、入社年数、年齢＋自己名義により決定）</p>
                                    <p className="mt-[10px]">・禁煙手当（月2.5万円）※禁煙推奨企業です</p>
                                    <p className="mt-[10px]">・資格給（基本情報処理、応用情報処理　各5千円/月）</p>
                                    <p className="mt-[10px]">・スポーツクラブ手当（実費：月5千円まで）</p>
                                    <p className="mt-[10px]">・リモートワーク手当（月3千円）</p>
                                    <p className="mt-[10px]">・通勤交通費（全額）</p>
                                    <p className="mt-[10px]">・書籍・参考書　会社負担</p>
                                </div>
							</div>
							<div className="my-[24px] h-px bg-slate-200"></div>
						</div>
					</div>
				</section>
                <section className="my-[160px] flex items-center">
                    <div className="flex">
                        <div className="flex items-center pr-[417px]">
                            <Harftitle title="Flow" subTitle="選考フロー" text_position="start"></Harftitle>
                        </div>
                        <div className="relative grid grid-cols-1 gap-[40px] items-center">
                            <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full border-r-2 border-af-black"></div>

                            <div className="w-[720px] h-[72px] border border-af-black rounded-[16px] bg-[#ffffff] flex items-center justify-center z-10">
                                <p className="text-af-xs font-bold tracking-wide">外部セミナー等</p>
                            </div>
                            <div className="w-[720px] h-[72px] border border-af-black rounded-[16px] bg-[#ffffff] flex items-center justify-center z-10">
                                <p className="text-af-xs font-bold tracking-wide">業界説明/会社説明</p>
                            </div>
                            <div className="w-[720px] h-[72px] border border-af-black rounded-[16px] bg-[#ffffff] flex items-center justify-center z-10">
                                <p className="text-af-xs font-bold tracking-wide">1次面接：CEO面談</p>
                            </div>
                            <div className="w-[720px] h-[72px] border border-af-black rounded-[16px] bg-[#ffffff] flex items-center justify-center z-10">
                                <p className="text-af-xs font-bold tracking-wide">2次面接：CTO面接</p>
                            </div>
                            <div className="w-[720px] h-[72px] border border-af-black rounded-[16px] bg-[#ffffff] flex items-center justify-center z-10">
                                <p className="text-af-xs font-bold tracking-wide">3次面接：懇親　若手メンバーとマネージャークラスとの会食</p>
                            </div>
                            <div className="w-[720px] h-[72px] border border-af-black rounded-[16px] bg-[#ffffff] flex items-center justify-center z-10">
                                <p className="text-af-xs font-bold tracking-wide">内定：内定書と承諾書を取り交わす</p>
                            </div>
                            <div className="w-[720px] h-[72px] border border-af-black rounded-[16px] bg-[#ffffff] flex items-center justify-center z-10">
                                <p className="text-af-xs font-bold tracking-wide">希望者は事前研修、アルバイトの紹介（対価あり）</p>
                            </div>
                        </div>
                    </div>
                </section>
			</div>
		</div>
	);
}

export default New_graduate_recruitment;
