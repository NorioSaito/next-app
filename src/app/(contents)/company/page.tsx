import React from 'react';
import Image from 'next/image';
import Harftitle from '../../_components/common/HarfTitle';
import Accordion from '../../_components/common/Accordion';
import style from '../../assets/css/common.module.css';
import { MapPinIcon } from '@heroicons/react/24/outline';
import Breadcrumb from '../../_components/common/breadcrumb_trail';

function Company() {
	return (
		<div>
			<div className="mx-[80px]">
				<div className="pagetitle mt-[207px]">
					<h1 className="text-af-lg">Company</h1>
				</div>
				<div className="breadcrumb mt-[30px]">
					<Breadcrumb />
				</div>
				<section className="mt-[56px] relative">
					<Image src="/company_heroimg.jpg" alt="" width={1280} height={480} />
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
						<Image src="/company_herotext.svg" alt="" width={400} height={214} />
					</div>
				</section>
				<section className="mt-[104px]">
					<Harftitle title="Mission" subTitle="経営理念" text_position="center"></Harftitle>
				</section>
				<section className="mt-[80px] grid-cols-3">
					<h1 className="text-[4.8rem] leading-[1.6] tracking-wide text-center">お客様の成功と笑顔を広げ、<br/>
					社会、社員を豊かに。
					</h1>
					<p className="mt-[30px] text-[2.0rem] leading-[3.2] tracking-widest text-center">エイ・フォースはひとを大切にする会社です。<br/>
					お客様が満足し成功をおさめることで、<br/>
					人びとにポジティブな影響をあたえ、<br/>
					より豊かで調和のとれた社会を実現します。<br/>
					また、社員ひとりひとりが誇りをもち、<br/>
					やりがいを感じられる職場環境を提供することで、<br/>
					社員の幸福と成長を追求します。<br/>
					お客様、社会、そして社員のすべてがともに成長し<br/>
					豊かさを享受できる未来をめざしてあゆみつづけます。
					</p>
					<div className="pt-[80px] flex items-center justify-center">
						<Image src="/company_img1.jpg" alt="" width={309} height={225} />
					</div>
				</section>
			</div>
			<section className="mt-[160px] bg-af-yellow flex items-center">
				<div className="mx-[80px] flex">
					<div className="flex items-center pr-[417px]">
						<Harftitle title="Vision" subTitle="行動理念" text_position="start"></Harftitle>
					</div>
					<div className="py-[66px] grid-cols-5 justify-start">
						<div className="mb-[40px] flex text-af-sm">
							<p className="text-white mr-[50px]">01</p>
							<p className="">期待を超えるサービスでお客様に感動をお届けする</p>
						</div>
						<div className="mb-[40px] flex text-af-sm">
							<p className="text-white mr-[50px]">02</p>
							<p className="">お客様と一生おつき合いできる関係づくりを目指す</p>
						</div>
						<div className="mb-[40px] flex text-af-sm">
							<p className="text-white mr-[50px]">03</p>
							<p className="">世の中に意味のある商品を創造・提供する</p>
						</div>
						<div className="mb-[40px] flex text-af-sm">
							<p className="text-white mr-[50px]">04</p>
							<p className="">常に社員が進化しながら夢をもって働ける職場をつくる</p>
						</div>
						<div className="flex text-af-sm">
							<p className="text-white mr-[50px]">05</p>
							<p className="">成長を糧に、豊かな人生を実現できる組織を目指す</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-af-black grid-cols-3">
				<div className="ml-[80px] pt-[85px] flex items-center">
					<div className="items-center">
						<div className="grid grid-rows-2">
							<div className={`text-start text-lg md:text-af-sm`}>
								<span className="pr-[8px] text-af-orange">●</span>
								<a className="text-white">行動理念</a>
							</div>
							<h2 className={`text-start text-outline-black text-2xl font-bold md:pt-[32px] text-af-lg`}>
								Values
							</h2>
						</div>
					</div>
				</div>
				<div className="pt-[70px] flex items-center justify-center">
					<div className="w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className="text-white text-center">
							<h3 className="text-af-sm font-bold" >RESPECTING</h3>
							<p className="my-[15px] text-[2rem] tracking-wide">敬意を払う・共感する</p>
							<p className="text-af-xs tracking-wide">お客様・仲間・家族・環境</p>
						</div>
					</div>
					<div className="mx-[80px] w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className="text-white text-center">
							<h3 className="text-af-sm font-bold" >EVOLVING</h3>
							<p className="my-[15px] text-[2rem] tracking-wide">進化・発展する</p>
							<p className="text-af-xs tracking-wide">生涯学習と常に挑戦を</p>
						</div>
					</div>
					<div className="w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className="text-white text-center">
							<h3 className="text-af-sm font-bold" >ENJOYING</h3>
							<p className="my-[15px] text-[2rem] tracking-wide">人生を楽しむ</p>
							<p className="text-af-xs tracking-wide">自己実現・他己実現</p>
						</div>
					</div>
				</div>
				<div className="pt-[40px] pb-[85px] flex items-center justify-center">
					<div className="w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className="text-white text-center">
							<h3 className="text-af-sm font-bold" >COMPLETING</h3>
							<p className="my-[15px] text-[2rem] tracking-wide">責任を持つ・完遂する</p>
							<p className="text-af-xs tracking-wide">品質・納期<br/>あと数%の努力を</p>
						</div>
					</div>
					<div className="ml-[80px] w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className="text-white text-center">
							<h3 className="text-af-sm font-bold" >TRUSTING</h3>
							<p className="my-[15px] text-[2rem] tracking-wide">信頼を築く</p>
							<p className="text-af-xs tracking-wide">気配りと一歩先の行動を</p>
						</div>
					</div>
				</div>
			</section>
			<div className="mx-[80px]">
				<section className="mt-[90px]">
					<Harftitle title="Message" subTitle="ご挨拶" text_position="center"></Harftitle>
				</section>
				<section className="mt-[70px]">
					<div className="flex">
						<div className="w-1/2 mr-auto tracking-wider">
							<h2 className="text-[4rem]">
								テキストテキストテキストテキスト
							</h2>
							<p className="text-af-xs leading-[2.4] mt-[20px]">
							社名の由来は、お客様のITをサポートする、「エース」として活躍する社員を育成・サービスを行う目的として名付けました。社員個々人が、お客様の信頼を得るため、気配りと一歩先の行動を心がけております。<br/><br/>
IT業界ではこの当たり前の行動ができず、納期ギリギリ・品質を守れない・お客様の想定外のシステムを作ってしまう、ということがたびたび起こります。そうならないために、生産性高く先んじた納期とお客様とのコミュニケーションにより、お客様の思い描いたシステムを実現できるよう、日々業務遂行をしております。<br/><br/>
さて、コロナ禍の影響でお客様の業務が在宅の新しい業態になり、リモートをキーワードに各社DXの実現を模索をされています。その根本はデータ（ログ）を集め、AI分析を行い、新サービスをいち早く提供し、事業を発展させていくことが、今後のビジネスの形になるのではないかと考え、今後はAiにも力を入れてまいります。そのために、従来のウォーターフォール型の開発から、パッケージの適用、クラウドの活用、オープンソースの適用、それらをアジャイルで実現する方法にも着手をしました。また、プログラム開発をエンジニアから、業務遂行する現場のエンドユーザー向けのトレーニングやコンサルティングまで行ってまいります。他、システム化の最後の領域とも言われる、「営業とマーケティング」にも、salesforceのパッケージを核にコロナでも営業が強い会社作りをサポートをしてまいります。<br/><br/>
進化と成長を常に意識し、社会とマーケットとの調和の中、皆様のお役に立ち、感動を与えられる存在でありたいと常に心掛けていきます。
							</p>
							<div className="mt-[30px] flex items-center">
								<p className="text-af-xs mr-[30px]">代表取締役</p>
								<p className="text-af-sm mr-[20px]">菅原 俊哉</p>
								<p className="text-af-xs text-af-orange">Sugahara Toshiya</p>
							</div>
						</div>
						<div>
							<Image src="/sugawara_photo.jpg" alt="" width={463} height={618} />
						</div>
					</div>
				</section>
				<section className="mt-[150px]">
					<Harftitle title="History" subTitle="沿革" text_position="center"></Harftitle>
				</section>
				<section className="mt-[70px]">
					<div className="grid-rows-5">
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className="mr-[20px] text-af-sm">2003年</p>
							<p className="w-[90px] text-[2rem]">11月</p>
							<div className="grid-rows-2">
								<p className="text-af-xs">・IT業界向けに新規顧客獲得を目的とした営業コンサルのアウトソーシングサービスを主たる事業として設立</p>
								<p className="mt-[10px] text-af-xs">・大手ハードメーカーのネットワーク機器販売部門等の営業支援を行う</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className="mr-[110px] text-af-sm">2004年</p>
							<div className="grid-rows-3">
								<p className=" text-af-xs">・Web系システム開発サービスを開始</p>
								<p className="mt-[10px] text-af-xs">・住友電工情報システム(株)とWebアプリケーション開発基板パッケージソフト ”楽々Framework” , 検索エンジン ”QuickSolution” の販売代理店契約を締結</p>
								<p className="mt-[10px] text-af-xs">・JETRO開催による「CEATECジャパン」にて “BizMaching” コーデュネータを務める</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
							<p className="mr-[110px] text-af-sm">2005年</p>
							<div className="grid-rows-2">
								<p className=" text-af-xs">・大阪事務所開設</p>
								<p className="mt-[10px] text-af-xs">・(株)システムインテグレータのECサイト構築パッケージ “SI Web Shopping” の販売代理店契約を締結</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className="mr-[110px] text-af-sm">2006年</p>
							<div className="grid-rows-2">
								<p className=" text-af-xs">・IBM系の開発会社群「UOSグループ」に加盟</p>
								<p className="mt-[10px] text-af-xs">・仏Planisware社とプロジェクト管理ソフト ”OPX2” の販売代理店契約を締結</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className="mr-[110px] text-af-sm">2007年</p>
							<div className="grid-rows-2">
								<p className=" text-af-xs">・(株)NTTデータ イントラマートのWebアプリケーションフレームワーク “intra-mart” の販売代理店・開発パートナとなる</p>
								<p className="mt-[10px] text-af-xs">・中国のアウトソーサーと協業しオフシェア開発を開始</p>
							</div>
						</div>
						<div className="mt-[24px] h-px bg-slate-200"></div>
					</div>
					<div className="pt-[35px]">
						<Accordion />
					</div>
				</section>
				<section className="mt-[150px]">
					<Harftitle title="Company" subTitle="会社概要" text_position="start"></Harftitle>
				</section>
				<section className="mt-[70px]">
					<div className="flex">
						<div className="w-[730px] mr-auto tracking-wide">
							<div className="grid-rows-10">
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">会社名</p>
									<p className="text-af-xs">エイ・フォース株式会社</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">所在地</p>
									<p className="text-af-xs">東京都千代田区飯田橋4-8-13 山商ビル 4F</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">設立</p>
									<p className="text-af-xs">2003年11月</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">資本金</p>
									<p className="text-af-xs">1,100万円</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">売上</p>
									<p className="text-af-xs">5.5億円（2023年6月末）</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">代表</p>
									<p className="text-af-xs">菅原　俊哉</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">従業員</p>
									<p className="text-af-xs">従業員 53名（2023年11月）</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">許認可</p>
									<p className="text-af-xs">プライバシーマーク 10824384(04)</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">所属団体</p>
									<p className="text-af-xs">UOSグループ、IT交流会（ITIA)、公益社団法人　麹町法人会</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
								<div className="flex items-center">
									<p className="ml-[103px] w-[180px] text-af-sm">顧問</p>
									<p className="text-af-xs">奥田　久美　　（労務関係顧問）　元東京労働局長</p>
								</div>
								<div className="my-[24px] h-px bg-slate-200"></div>
							</div>
						</div>
						<div>
							<Image src="/A-force_horizon.svg" alt="" width={463} height={618} />
						</div>
					</div>
				</section>
				<section className="mt-[100px]">
					<Harftitle title="Access" subTitle="住所" text_position="start"></Harftitle>
				</section>
				<section>
					<div className="flex">
						<div className="mt-[70px] mr-auto tracking-wide">
							<div>
								<p className="text-af-xs">JR飯田橋駅 東口より徒歩2分
								<br/>
								営団地下鉄・都営地下鉄　飯田橋駅 A4出口より徒歩1分
								<br/>
								<br/>
								※山商ビルは複数あります。
								<br/>
								迷った場合にはお電話でお問合せください。
								<br/>
								１階に珈琲館のあるビルになります。</p>
							</div>
							<div className="mt-[42px]">
								<a
									href={"https://maps.app.goo.gl/K7b77JtEnWkoc8fD6"}
									target="_blank"
									className={`${style.btn} ${style.bgleft} grid grid-cols-3 w-15 border text-black rounded-full pl-4 pr-2 py-2`}
								>
									<div className="col-span-2 text-af-xs flex items-center justify-center">{"Google Mapで見る"}</div>
									<div className="grid items-center contents-cente justify-end">
										<div className="font-bold w-[45px] h-[45px] rounded-full bg-af-orange flex items-center justify-center">
											<MapPinIcon className="text-white w-[20px] h-[120px] " />
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="mt-[50px]">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6480.0193660954355!2d139.74359407525145!3d35.70137932886784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f4.1!3m3!1m2!1s0x60188c442059e221%3A0x7f5b46abf1c4b1c2!2z44Ko44Kk772l44OV44Kp44O844K544ix!5e0!3m2!1sja!2sjp!4v1719194225249!5m2!1sja!2sjp" style={{width: "720px", height: "380px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						</div>
					</div>
				</section>
				<section className="mt-[150px]">
					<Harftitle title="Main client" subTitle="主要取引先" text_position="start"></Harftitle>
				</section>
				<section>
					<div className="mt-[100px] mb-[161px] ml-[10px] tracking-wide leading-[2] flex">
						<div className="mr-[180px]">
							<p className="text-af-xs">株式会社イーベース・ソリューションズ<br/>
								株式会社インターネットイニシアティブ<br/>
								インフォアジャパン株式会社<br/>
								株式会社インフォディオ<br/>
								株式会社一球<br/>
								Winテクノロジ株式会社<br/>
								SCSK株式会社<br/>
								株式会社エヌ・ティ・ティ・データ・イントラマート<br/>
								京都大学<br/>
								株式会社ケーエスジャパン<br/>
								株式会社クラフト<br/>
								株式会社システムインテグレータ<br/>
								CTCシステムマネジメント株式会社<br/>
								株式会社JIEC<br/>
								スカイパートナーズ合同会社<br/>
								住友電工情報システム株式会社<br/>
								ソフトバンク株式会社<br/>
								株式会社トップゲート<br/>
								宝ネットワークシステム株式会社（宝酒造）
							</p>
						</div>
						<div>
							<p className="text-af-xs">商船三井システムズ株式会社（商船三井）<br/>
								東急不動産株式会社<br/>
								株式会社東急コミュニティー<br/>
								清水建設株式会社<br/>
								自治医科大学<br/>
								日産自動車株式会社<br/>
								一般財団法人日本情報経済社会推進協会（JIPDEC）<br/>
								ちばぎんコンピューターサービス株式会社（千葉銀行）<br/>
								日本ヒューレット・パッカード株式会社<br/>
								独立行政法人日本貿易振興機構（JETRO）<br/>
								ピップ株式会社<br/>
								株式会社陸上競技社<br/>
								べニックソリューション株式会社（川崎重工業）<br/>
								株式会社宝幸<br/>
								株式会社マイネットシステム<br/>
								株式会社MINORIソリューションズ<br/>
								株式会社みちのりホールディングス<br/>
								株式会社リクルートコミュニケーションズ<br/>
								株式会社ワークス・ジャパン
							</p>
						</div>
					</div>
				</section>

			</div>
		</div>
	);
}

export default Company;
