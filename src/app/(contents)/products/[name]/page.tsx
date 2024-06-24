import Breadcrumb from '@/app/_components/Breadcrumb';
import Link from 'next/link';
import React from 'react';

type Products = {
	[key: string]: {
		name: string;
		text: string;
		features: {
			name: string;
			details: {
				subject: string;
				description: string;
			}[];
		}[];
	};
};
function ProductDetail({ params }: { params: { name: string } }) {
	const products: Products = {
		celf: {
			name: 'CELF',
			text: 'CELF CELF CELF CELF CELF CELF CELF CELF CELF CELF CELF ',
			features: [
				{
					name: 'ノーコードアプリ開発ツール',
					details: [
						{
							subject: 'ノーコードアプリ開発ツール',
							description:
								'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
						},
						{
							subject: 'Excel ライクで開発できる',
							description:
								'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
						},
					],
				},
				{
					name: 'RPA 機能搭載（有償オプション）',
					details: [
						{
							subject: '定型作業を自動化できる',
							description:
								'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
						},
						{
							subject: '開発未経験者でもアプリ開発ができる',
							description:
								'hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge hoge ',
						},
					],
				},
			],
		},
		salesforce: {
			name: 'Sales force',
			text: 'SalesforceのCustomer 360なら、マーケティングから営業へ有望なリードだけを提供し、受注後は顧客を理解した満足度の高いサポートサービスを提供することができるようになります。',
			features: [
				{
					name: 'Marketing Cloud',
					details: [
						{
							subject: '営業のためのマーケティングへ変革',
							description:
								'営業がすぐにでも会いたい見込み客、そこにマーケティングが一人ひとりの興味関心に基づいたメッセージを送ります。見込み客が広告やWebサイトをクリックすると、新規リード獲得を営業チームへ自動通知。Marketing Cloud ならマーケティングと営業の理想的な関係をつくります。',
						},
						{
							subject: '商談の成約に必要な情報は全てここに',
							description:
								'営業チームは、キーマンの関心、過去の接触履歴など商談成立に必要な顧客の情報を、全て Sales Cloud から入手できます。さらには、AIが商談を進めるための最適なタイミングとアクションを自動通知。成約率の高い営業チームを生み出します。',
						},
					],
				},
				{
					name: 'Service Cloud',
					details: [
						{
							subject: '顧客満足度を高めるカスタマーサポートへ',
							description:
								'顧客が直面している問題に、カスタマーサポート部門全体で取り組める。だから、サポートメンバーはお客様の問題解決に必要な調査や組織間連携をすぐに実行でき、顧客満足度を高めるサポートチームを生み出します。',
						},
						{
							subject: 'データで意思決定する組織文化に',
							description:
								'受注傾向の変動や突然の異常など、ビジネスに影響のある動きを自動で通知。技術知識不要でデータから原因まで掘り下げられるので、データに基づいた意思決定がしやすくなります。',
						},
					],
				},
			],
		},
	};
	const product = products[params.name];

	return (
		<div className="mx-20">
			<section>
				<div className="mb-10">
					<h1 className="text-[4rem]">{product.name}</h1>
					<Breadcrumb />
				</div>

				<p className="text-[4rem] font-extrabold w-1/2">{product.text}</p>
			</section>
			<section className="mt-10 border-y divide-y">
				{product.features.map((feature, index) => (
					<div key={index}>
						<div className="py-10 grid grid-flow-col">
							<div className="flex">
								{/* 機能名 */}
								<div className="text-[2rem] flex-1">{feature.name}</div>
								<div className="flex flex-col flex-1">
									{feature.details.map((detail) => (
										<div key={detail.subject}>
											{/* 詳細タイトル */}
											<div className="text-[1.5rem] mb-5">
												{detail.subject}
											</div>
											{/* 説明 */}
											<div className="text-[1rem] mb-10">
												{detail.description}
											</div>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</section>
			<section className="mt-10">
				<div>
					<div className="py-10 grid grid-flow-col">
						<div className="flex">
							<div className="text-2xl flex-1">関連</div>
							<div className="flex flex-col flex-1">
								<Link href="#">リンク</Link>
								<Link href="#">リンク</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<button>サービストップへ</button>
				</div>
			</section>
		</div>
	);
}

export default ProductDetail;
