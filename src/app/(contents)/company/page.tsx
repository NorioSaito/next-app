import React from 'react';
import Image from 'next/image';
import Harftitle from '../../_components/common/HarfTitle';
import Accordion from '../../_components/common/Accordion';

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
					<div className='pt-[8rem] flex items-center justify-center'>
						<Image src="/company_img1.jpg" alt="" width={309} height={225} />
					</div>
				</section>
			</div>
			<section className="mt-[16rem] bg-af-yellow  flex items-center">
				<div className="mx-[8rem] flex">
					<div className="flex items-center pr-[41.7rem]">
						<Harftitle title="Vision" subTitle="行動理念" text_position="start"></Harftitle>
					</div>
					<div className="py-[66px] grid-cols-5 justify-start">
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
			<section className="bg-af-black grid-cols-3">
				<div className="ml-[8rem] pt-[85px] flex items-center">
					<div className="items-center">
						<div className="grid grid-rows-2">
							<div className={`text-start text-lg md:text-[2.4rem]`}>
								<span className="pr-[8px] text-af-orange">●</span>
								<a className='text-white'>行動理念</a>
							</div>
							<h2 className={`text-start text-outline-black text-2xl font-bold md:pt-[32px] text-[6.4rem]`}>
								Values
							</h2>
						</div>
					</div>
				</div>
				<div className="pt-[70px] flex items-center justify-center">
					<div className="w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className='text-white text-center'>
							<h3 className='text-[2.4rem] font-bold' >RESPECTING</h3>
							<p className='my-[15px] text-[2rem] tracking-wide'>敬意を払う・共感する</p>
							<p className='text-[1.6rem] tracking-wide'>お客様・仲間・家族・環境</p>
						</div>
					</div>
					<div className="mx-[80px] w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className='text-white text-center'>
							<h3 className='text-[2.4rem] font-bold' >EVOLVING</h3>
							<p className='my-[15px] text-[2rem] tracking-wide'>進化・発展する</p>
							<p className='text-[1.6rem] tracking-wide'>生涯学習と常に挑戦を</p>
						</div>
					</div>
					<div className="w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className='text-white text-center'>
							<h3 className='text-[2.4rem] font-bold' >ENJOYING</h3>
							<p className='my-[15px] text-[2rem] tracking-wide'>人生を楽しむ</p>
							<p className='text-[1.6rem] tracking-wide'>自己実現・他己実現</p>
						</div>
					</div>
				</div>
				<div className="pt-[40px] pb-[85px] flex items-center justify-center">
					<div className="w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className='text-white text-center'>
							<h3 className='text-[2.4rem] font-bold' >COMPLETING</h3>
							<p className='my-[15px] text-[2rem] tracking-wide'>責任を持つ・完遂する</p>
							<p className='text-[1.6rem] tracking-wide'>品質・納期<br/>あと数%の努力を</p>
						</div>
					</div>
					<div className="ml-[80px] w-[250px] h-[250px] rounded-full bg-af-green flex items-center justify-center">
						<div className='text-white text-center'>
							<h3 className='text-[2.4rem] font-bold' >TRUSTING</h3>
							<p className='my-[15px] text-[2rem] tracking-wide'>信頼を築く</p>
							<p className='text-[1.6rem] tracking-wide'>気配りと一歩先の行動を</p>
						</div>
					</div>
				</div>
			</section>
			<div className="mx-[8rem]">
				<section className="mt-[9rem]">
					<Harftitle title="Message" subTitle="ご挨拶" text_position="center"></Harftitle>
				</section>
				<section className="mt-[7rem]">
					<div className="flex">
						<div className="w-1/2 mr-[181px] tracking-wider">
							<h2 className="text-[4rem]">
								テキストテキストテキストテキスト
							</h2>
							<p className="text-[1.6rem] leading-[2.4] mt-[2rem]">
							社名の由来は、お客様のITをサポートする、「エース」として活躍する社員を育成・サービスを行う目的として名付けました。社員個々人が、お客様の信頼を得るため、気配りと一歩先の行動を心がけております。<br/><br/>
IT業界ではこの当たり前の行動ができず、納期ギリギリ・品質を守れない・お客様の想定外のシステムを作ってしまう、ということがたびたび起こります。そうならないために、生産性高く先んじた納期とお客様とのコミュニケーションにより、お客様の思い描いたシステムを実現できるよう、日々業務遂行をしております。<br/><br/>
さて、コロナ禍の影響でお客様の業務が在宅の新しい業態になり、リモートをキーワードに各社DXの実現を模索をされています。その根本はデータ（ログ）を集め、AI分析を行い、新サービスをいち早く提供し、事業を発展させていくことが、今後のビジネスの形になるのではないかと考え、今後はAiにも力を入れてまいります。そのために、従来のウォーターフォール型の開発から、パッケージの適用、クラウドの活用、オープンソースの適用、それらをアジャイルで実現する方法にも着手をしました。また、プログラム開発をエンジニアから、業務遂行する現場のエンドユーザー向けのトレーニングやコンサルティングまで行ってまいります。他、システム化の最後の領域とも言われる、「営業とマーケティング」にも、salesforceのパッケージを核にコロナでも営業が強い会社作りをサポートをしてまいります。<br/><br/>
進化と成長を常に意識し、社会とマーケットとの調和の中、皆様のお役に立ち、感動を与えられる存在でありたいと常に心掛けていきます。
							</p>
							<div className="mt-[3rem] flex items-center">
								<p className="text-[1.6rem] mr-[3rem]">代表取締役</p>
								<p className="text-[2.4rem] mr-[2rem]">菅原 俊哉</p>
								<p className="text-[1.6rem] text-af-orange">Sugahara Toshiya</p>
							</div>
						</div>
						<div className='w-[463] h-[618]'>
							<Image src="/sugawara_photo.jpg" alt="" width={463} height={618} />
						</div>
					</div>
				</section>
				<section className="mt-[15rem]">
					<Harftitle title="History" subTitle="沿革" text_position="center"></Harftitle>
				</section>
				<section className="mt-[7rem]">
					<div className='grid-rows-5'>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className='mr-[20px] text-[2.4rem]'>2003年</p>
							<p className='w-[90px] text-[2rem]'>11月</p>
							<div className='grid-rows-2'>
								<p className='text-[1.6rem]'>・IT業界向けに新規顧客獲得を目的とした営業コンサルのアウトソーシングサービスを主たる事業として設立</p>
								<p className='mt-[1rem] text-[1.6rem]'>・大手ハードメーカーのネットワーク機器販売部門等の営業支援を行う</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className='mr-[110px] text-[2.4rem]'>2004年</p>
							<div className='grid-rows-3'>
								<p className=' text-[1.6rem]'>・Web系システム開発サービスを開始</p>
								<p className='mt-[1rem] text-[1.6rem]'>・住友電工情報システム(株)とWebアプリケーション開発基板パッケージソフト ”楽々Framework” , 検索エンジン ”QuickSolution” の販売代理店契約を締結</p>
								<p className='mt-[1rem] text-[1.6rem]'>・JETRO開催による「CEATECジャパン」にて “BizMaching” コーデュネータを務める</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-green flex items-center justify-center"></div>
							<p className='mr-[110px] text-[2.4rem]'>2005年</p>
							<div className='grid-rows-2'>
								<p className=' text-[1.6rem]'>・大阪事務所開設</p>
								<p className='mt-[1rem] text-[1.6rem]'>・(株)システムインテグレータのECサイト構築パッケージ “SI Web Shopping” の販売代理店契約を締結</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-orange flex items-center justify-center"></div>
							<p className='mr-[110px] text-[2.4rem]'>2006年</p>
							<div className='grid-rows-2'>
								<p className=' text-[1.6rem]'>・IBM系の開発会社群「UOSグループ」に加盟</p>
								<p className='mt-[1rem] text-[1.6rem]'>・仏Planisware社とプロジェクト管理ソフト ”OPX2” の販売代理店契約を締結</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						<div className="flex items-center">
							<div className="mx-[30px] w-[30px] h-[30px] rounded-full bg-af-yellow flex items-center justify-center"></div>
							<p className='mr-[110px] text-[2.4rem]'>2007年</p>
							<div className='grid-rows-2'>
								<p className=' text-[1.6rem]'>・(株)NTTデータ イントラマートのWebアプリケーションフレームワーク “intra-mart” の販売代理店・開発パートナとなる</p>
								<p className='mt-[1rem] text-[1.6rem]'>・中国のアウトソーサーと協業しオフシェア開発を開始</p>
							</div>
						</div>
						<div className="mt-[24px] h-px bg-slate-200"></div>
					</div>
					<div className='pt-[3.5rem]'>
						<Accordion />
					</div>

				</section>
				<section className="mt-[15rem]">
					<Harftitle title="Company" subTitle="会社概要" text_position="start"></Harftitle>
				</section>
				<section className="mt-[7rem]">
					<div className="flex">
						<div className="w-[777px] pr-[100px] tracking-wider">
					<div className='grid-rows-10'>
						<div className="flex items-center">
							<p className='ml-[103px] mr-[20px] text-[2.4rem]'>会社名</p>
							<p className='text-[1.6rem]'>エイ・フォース株式会社</p>
							</div>
						</div>
						<div className="my-[24px] h-px bg-slate-200"></div>
						</div>
						<div className='w-[463] h-[618]'>
							<Image src="/sugawara_photo.jpg" alt="" width={463} height={618} />
						</div>
					</div>
				</section>



			</div>
		</body>
	);
}

export default Company;
